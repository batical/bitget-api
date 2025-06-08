import { RestClientType } from '../types';
import { RestClientOptions } from './requestUtils';
interface FetchRequestConfig {
    url?: string;
    method?: string;
    headers?: Record<string, string>;
    body?: string | FormData | URLSearchParams;
    params?: any;
    data?: any;
    timeout?: number;
}
export default abstract class BaseRestClient {
    private options;
    private baseUrl;
    private globalRequestOptions;
    private apiKey;
    private apiSecret;
    private apiPass;
    /** Defines the client type (affecting how requests & signatures behave) */
    abstract getClientType(): RestClientType;
    /**
     * Create an instance of the REST client. Pass API credentials in the object in the first parameter.
     * @param {RestClientOptions} [restClientOptions={}] options to configure REST API connectivity
     * @param {FetchRequestConfig} [networkOptions={}] HTTP networking options for fetch
     */
    constructor(restOptions?: RestClientOptions, networkOptions?: FetchRequestConfig);
    get(endpoint: string, params?: any): Promise<any>;
    getPrivate(endpoint: string, params?: any): Promise<any>;
    post(endpoint: string, params?: any): Promise<any>;
    postPrivate(endpoint: string, params?: any): Promise<any>;
    deletePrivate(endpoint: string, params?: any): Promise<any>;
    /**
     * @private Make a HTTP request to a specific endpoint. Private endpoint API calls are automatically signed.
     */
    private _call;
    /**
     * @private generic handler to parse request exceptions
     */
    parseException(e: any): unknown;
    /**
     * @private sign request and set recv window
     */
    private signRequest;
    private prepareSignParams;
    /** Returns an fetch request object. Handles signing process automatically if this is a private API call */
    private buildRequest;
}
export {};
