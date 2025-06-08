import { RestClientType } from '../types';
import { signMessage } from './node-support';
import {
  getRestBaseUrl,
  RestClientOptions,
  serializeParams,
} from './requestUtils';
import { neverGuard } from './websocket-util';

// Custom interfaces to replace Axios types
interface FetchRequestConfig {
  url?: string;
  method?: string;
  headers?: Record<string, string>;
  body?: string | FormData | URLSearchParams;
  params?: any;
  data?: any;
  timeout?: number;
}

interface FetchResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
  config: FetchRequestConfig;
}

interface SignedRequest<T extends object | undefined = object> {
  originalParams: T;
  paramsWithSign?: T & { sign: string };
  serializedParams: string;
  sign: string;
  queryParamsWithSign: string;
  timestamp: number;
  recvWindow: number;
}

interface UnsignedRequest<T extends object | undefined = object> {
  originalParams: T;
  paramsWithSign: T;
}

type SignMethod = 'bitget';
type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'HEAD'
  | 'OPTIONS';

const ENABLE_HTTP_TRACE =
  typeof process === 'object' &&
  typeof process.env === 'object' &&
  process.env.BITGETTRACE;

// HTTP tracing is now handled within the customFetch function

// Helper function to convert fetch Response to our FetchResponse interface
async function createFetchResponse<T>(
  response: Response,
  config: FetchRequestConfig,
): Promise<FetchResponse<T>> {
  let data: T;

  // Try to parse as JSON, fallback to text
  try {
    const text = await response.text();
    data = text ? JSON.parse(text) : ({} as T);
  } catch {
    data = {} as T;
  }

  return {
    data,
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    config,
  };
}

// Helper function to make fetch request with timeout
async function fetchWithTimeout(
  url: string,
  options: RequestInit & { timeout?: number },
): Promise<Response> {
  const { timeout = 300000, ...fetchOptions } = options; // 5 minutes default

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

// Custom fetch function that mimics axios behavior
async function customFetch<T = any>(
  config: FetchRequestConfig,
): Promise<FetchResponse<T>> {
  const { url, method = 'GET', headers = {}, data, params, timeout } = config;

  if (!url) {
    throw new Error('URL is required');
  }

  let finalUrl = url;
  let body: string | undefined;

  // Handle query parameters for GET requests
  if (method === 'GET' && params) {
    const urlObj = new URL(url);
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined && params[key] !== null) {
        urlObj.searchParams.append(key, String(params[key]));
      }
    });
    finalUrl = urlObj.toString();
  }

  // Handle request body for non-GET requests
  if (method !== 'GET' && data) {
    if (typeof data === 'string') {
      body = data;
    } else {
      body = JSON.stringify(data);
      headers['Content-Type'] = headers['Content-Type'] || 'application/json';
    }
  }

  const requestOptions: RequestInit = {
    method,
    headers,
    body,
  };

  if (ENABLE_HTTP_TRACE) {
    console.log(
      new Date(),
      'Starting Request',
      JSON.stringify(
        {
          url: finalUrl,
          method,
          params,
          data,
        },
        null,
        2,
      ),
    );
  }

  try {
    const response = await fetchWithTimeout(finalUrl, {
      ...requestOptions,
      timeout,
    });
    const fetchResponse = await createFetchResponse<T>(response, config);

    if (ENABLE_HTTP_TRACE) {
      const headersObj: Record<string, string> = {};
      fetchResponse.headers.forEach((value, key) => {
        headersObj[key] = value;
      });

      console.log(new Date(), 'Response:', {
        response: {
          status: fetchResponse.status,
          statusText: fetchResponse.statusText,
          headers: headersObj,
          data: fetchResponse.data,
        },
      });
    }

    return fetchResponse;
  } catch (error) {
    console.error('Fetch Error Details:', {
      url: finalUrl,
      method,
      error: error.message || error,
      stack: error.stack,
    });

    if (ENABLE_HTTP_TRACE) {
      console.log(new Date(), 'Request Error:', error);
    }
    throw error;
  }
}

export default abstract class BaseRestClient {
  private options: RestClientOptions;

  private baseUrl: string;

  private globalRequestOptions: FetchRequestConfig;

  private apiKey: string | undefined;

  private apiSecret: string | undefined;

  private apiPass: string | undefined;

  /** Defines the client type (affecting how requests & signatures behave) */
  abstract getClientType(): RestClientType;

  /**
   * Create an instance of the REST client. Pass API credentials in the object in the first parameter.
   * @param {RestClientOptions} [restClientOptions={}] options to configure REST API connectivity
   * @param {FetchRequestConfig} [networkOptions={}] HTTP networking options for fetch
   */
  constructor(
    restOptions: RestClientOptions = {},
    networkOptions: FetchRequestConfig = {},
  ) {
    this.options = {
      recvWindow: 5000,
      /** Throw errors if any request params are empty */
      strictParamValidation: false,
      encodeQueryStringValues: true,
      ...restOptions,
    };

    this.globalRequestOptions = {
      /** in ms == 5 minutes by default */
      timeout: 1000 * 60 * 5,
      /** inject custom request options based on fetch specs */
      ...networkOptions,
      headers: {
        'X-CHANNEL-API-CODE': 'hbnni',
        'Content-Type': 'application/json',
        locale: 'en-US',
        ...(restOptions.demoTrading ? { paptrading: '1' } : {}),
        ...networkOptions.headers,
      },
    };

    this.baseUrl = getRestBaseUrl(false, restOptions);
    this.apiKey = this.options.apiKey;
    this.apiSecret = this.options.apiSecret;
    this.apiPass = this.options.apiPass;

    // Throw if one of the 3 values is missing, but at least one of them is set
    const credentials = [this.apiKey, this.apiSecret, this.apiPass];
    if (
      credentials.includes(undefined) &&
      credentials.some((v) => typeof v === 'string')
    ) {
      throw new Error(
        'API Key, Secret & Passphrase are ALL required to use the authenticated REST client',
      );
    }
  }

  get(endpoint: string, params?: any) {
    return this._call('GET', endpoint, params, true);
  }

  getPrivate(endpoint: string, params?: any) {
    return this._call('GET', endpoint, params, false);
  }

  post(endpoint: string, params?: any) {
    return this._call('POST', endpoint, params, true);
  }

  postPrivate(endpoint: string, params?: any) {
    return this._call('POST', endpoint, params, false);
  }

  deletePrivate(endpoint: string, params?: any) {
    return this._call('DELETE', endpoint, params, false);
  }

  /**
   * @private Make a HTTP request to a specific endpoint. Private endpoint API calls are automatically signed.
   */
  private async _call(
    method: HttpMethod,
    endpoint: string,
    params?: any,
    isPublicApi?: boolean,
  ): Promise<any> {
    // Sanity check to make sure it's only ever prefixed by one forward slash
    const requestUrl = [this.baseUrl, endpoint].join(
      endpoint.startsWith('/') ? '' : '/',
    );

    // Build a request and handle signature process
    const options = await this.buildRequest(
      method,
      endpoint,
      requestUrl,
      params,
      isPublicApi,
    );

    if (ENABLE_HTTP_TRACE) {
      console.log('full request: ', options);
    }

    // Dispatch request
    return customFetch(options)
      .then((response) => {
        if (response.status == 200) {
          if (
            typeof response.data?.code === 'string' &&
            response.data?.code !== '00000'
          ) {
            throw { response };
          }
          return response.data;
        }
        throw { response };
      })
      .catch((e) => this.parseException(e));
  }

  /**
   * @private generic handler to parse request exceptions
   */
  parseException(e: any): unknown {
    if (this.options.parseExceptions === false) {
      throw e;
    }

    // Something happened in setting up the request that triggered an error
    if (!e.response) {
      if (!e.request) {
        throw e.message;
      }

      // request made but no response received
      throw e;
    }

    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const response: FetchResponse = e.response;
    // console.error('err: ', response?.data);

    const headersObj: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      headersObj[key] = value;
    });

    throw {
      code: response.status,
      message: response.statusText,
      body: response.data,
      headers: headersObj,
      requestOptions: {
        ...this.options,
        // Prevent credentials from leaking into error messages
        apiPass: 'omittedFromError',
        apiSecret: 'omittedFromError',
      },
    };
  }

  /**
   * @private sign request and set recv window
   */
  private async signRequest<T extends object | undefined = object>(
    data: T,
    endpoint: string,
    method: HttpMethod,
    signMethod: SignMethod,
  ): Promise<SignedRequest<T>> {
    const timestamp = Date.now();

    const res: SignedRequest<T> = {
      originalParams: {
        ...data,
      },
      sign: '',
      timestamp,
      recvWindow: 0,
      serializedParams: '',
      queryParamsWithSign: '',
    };

    if (!this.apiKey || !this.apiSecret) {
      return res;
    }

    // It's possible to override the recv window on a per rquest level
    const strictParamValidation = this.options.strictParamValidation;
    const encodeQueryStringValues = this.options.encodeQueryStringValues;

    if (signMethod === 'bitget') {
      const signRequestParams =
        method === 'GET'
          ? serializeParams(
              data,
              strictParamValidation,
              encodeQueryStringValues,
              '?',
            )
          : JSON.stringify(data) || '';

      const paramsStr =
        timestamp + method.toUpperCase() + endpoint + signRequestParams;

      // console.log('sign params: ', paramsStr);

      res.sign = await signMessage(paramsStr, this.apiSecret, 'base64');
      res.queryParamsWithSign = signRequestParams;
      return res;
    }

    console.error(
      new Date(),
      neverGuard(signMethod, `Unhandled sign method: "${signMessage}"`),
    );

    return res;
  }

  private async prepareSignParams<TParams extends object | undefined>(
    method: HttpMethod,
    endpoint: string,
    signMethod: SignMethod,
    params?: TParams,
    isPublicApi?: true,
  ): Promise<UnsignedRequest<TParams>>;

  private async prepareSignParams<TParams extends object | undefined>(
    method: HttpMethod,
    endpoint: string,
    signMethod: SignMethod,
    params?: TParams,
    isPublicApi?: false | undefined,
  ): Promise<SignedRequest<TParams>>;

  private async prepareSignParams<TParams extends object | undefined>(
    method: HttpMethod,
    endpoint: string,
    signMethod: SignMethod,
    params?: TParams,
    isPublicApi?: boolean,
  ) {
    if (isPublicApi) {
      return {
        originalParams: params,
        paramsWithSign: params,
      };
    }

    if (!this.apiKey || !this.apiSecret) {
      throw new Error('Private endpoints require api and private keys set');
    }

    return this.signRequest(params, endpoint, method, signMethod);
  }

  /** Returns an fetch request object. Handles signing process automatically if this is a private API call */
  private async buildRequest(
    method: HttpMethod,
    endpoint: string,
    url: string,
    params?: any,
    isPublicApi?: boolean,
  ): Promise<FetchRequestConfig> {
    const options: FetchRequestConfig = {
      ...this.globalRequestOptions,
      url: url,
      method: method,
    };

    for (const key in params) {
      if (typeof params[key] === 'undefined') {
        delete params[key];
      }
    }

    if (isPublicApi || !this.apiKey || !this.apiPass) {
      return {
        ...options,
        params: params,
      };
    }

    const signResult = await this.prepareSignParams(
      method,
      endpoint,
      'bitget',
      params,
      isPublicApi,
    );

    const authHeaders = {
      'ACCESS-KEY': this.apiKey,
      'ACCESS-PASSPHRASE': this.apiPass,
      'ACCESS-TIMESTAMP': signResult.timestamp.toString(),
      'ACCESS-SIGN': signResult.sign,
    };

    if (method === 'GET') {
      return {
        ...options,
        headers: {
          ...authHeaders,
          ...options.headers,
        },
        url: options.url + signResult.queryParamsWithSign,
      };
    }

    return {
      ...options,
      headers: {
        ...authHeaders,
        ...options.headers,
      },
      data: params,
    };
  }
}
