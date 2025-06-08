"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_support_1 = require("./node-support");
const requestUtils_1 = require("./requestUtils");
const websocket_util_1 = require("./websocket-util");
const ENABLE_HTTP_TRACE = typeof process === 'object' &&
    typeof process.env === 'object' &&
    process.env.BITGETTRACE;
// HTTP tracing is now handled within the customFetch function
// Helper function to convert fetch Response to our FetchResponse interface
function createFetchResponse(response, config) {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        // Try to parse as JSON, fallback to text
        try {
            const text = yield response.text();
            data = text ? JSON.parse(text) : {};
        }
        catch (_a) {
            data = {};
        }
        return {
            data,
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
            config,
        };
    });
}
// Helper function to make fetch request with timeout
function fetchWithTimeout(url, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { timeout = 300000 } = options, fetchOptions = __rest(options, ["timeout"]); // 5 minutes default
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        try {
            const response = yield fetch(url, Object.assign(Object.assign({}, fetchOptions), { signal: controller.signal }));
            clearTimeout(timeoutId);
            return response;
        }
        catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    });
}
// Custom fetch function that mimics axios behavior
function customFetch(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const { url, method = 'GET', headers = {}, data, params, timeout } = config;
        if (!url) {
            throw new Error('URL is required');
        }
        let finalUrl = url;
        let body;
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
            }
            else {
                body = JSON.stringify(data);
                headers['Content-Type'] = headers['Content-Type'] || 'application/json';
            }
        }
        const requestOptions = {
            method,
            headers,
            body,
        };
        if (ENABLE_HTTP_TRACE) {
            console.log(new Date(), 'Starting Request', JSON.stringify({
                url: finalUrl,
                method,
                params,
                data,
            }, null, 2));
        }
        try {
            const response = yield fetchWithTimeout(finalUrl, Object.assign(Object.assign({}, requestOptions), { timeout }));
            const fetchResponse = yield createFetchResponse(response, config);
            if (ENABLE_HTTP_TRACE) {
                const headersObj = {};
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
        }
        catch (error) {
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
    });
}
class BaseRestClient {
    /**
     * Create an instance of the REST client. Pass API credentials in the object in the first parameter.
     * @param {RestClientOptions} [restClientOptions={}] options to configure REST API connectivity
     * @param {FetchRequestConfig} [networkOptions={}] HTTP networking options for fetch
     */
    constructor(restOptions = {}, networkOptions = {}) {
        this.options = Object.assign({ recvWindow: 5000, 
            /** Throw errors if any request params are empty */
            strictParamValidation: false, encodeQueryStringValues: true }, restOptions);
        this.globalRequestOptions = Object.assign(Object.assign({ 
            /** in ms == 5 minutes by default */
            timeout: 1000 * 60 * 5 }, networkOptions), { headers: Object.assign(Object.assign({ 'X-CHANNEL-API-CODE': 'hbnni', 'Content-Type': 'application/json', locale: 'en-US' }, (restOptions.demoTrading ? { paptrading: '1' } : {})), networkOptions.headers) });
        this.baseUrl = (0, requestUtils_1.getRestBaseUrl)(false, restOptions);
        this.apiKey = this.options.apiKey;
        this.apiSecret = this.options.apiSecret;
        this.apiPass = this.options.apiPass;
        // Throw if one of the 3 values is missing, but at least one of them is set
        const credentials = [this.apiKey, this.apiSecret, this.apiPass];
        if (credentials.includes(undefined) &&
            credentials.some((v) => typeof v === 'string')) {
            throw new Error('API Key, Secret & Passphrase are ALL required to use the authenticated REST client');
        }
    }
    get(endpoint, params) {
        return this._call('GET', endpoint, params, true);
    }
    getPrivate(endpoint, params) {
        return this._call('GET', endpoint, params, false);
    }
    post(endpoint, params) {
        return this._call('POST', endpoint, params, true);
    }
    postPrivate(endpoint, params) {
        return this._call('POST', endpoint, params, false);
    }
    deletePrivate(endpoint, params) {
        return this._call('DELETE', endpoint, params, false);
    }
    /**
     * @private Make a HTTP request to a specific endpoint. Private endpoint API calls are automatically signed.
     */
    _call(method, endpoint, params, isPublicApi) {
        return __awaiter(this, void 0, void 0, function* () {
            // Sanity check to make sure it's only ever prefixed by one forward slash
            const requestUrl = [this.baseUrl, endpoint].join(endpoint.startsWith('/') ? '' : '/');
            // Build a request and handle signature process
            const options = yield this.buildRequest(method, endpoint, requestUrl, params, isPublicApi);
            if (ENABLE_HTTP_TRACE) {
                console.log('full request: ', options);
            }
            // Dispatch request
            return customFetch(options)
                .then((response) => {
                var _a, _b;
                if (response.status == 200) {
                    if (typeof ((_a = response.data) === null || _a === void 0 ? void 0 : _a.code) === 'string' &&
                        ((_b = response.data) === null || _b === void 0 ? void 0 : _b.code) !== '00000') {
                        throw { response };
                    }
                    return response.data;
                }
                throw { response };
            })
                .catch((e) => this.parseException(e));
        });
    }
    /**
     * @private generic handler to parse request exceptions
     */
    parseException(e) {
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
        const response = e.response;
        // console.error('err: ', response?.data);
        const headersObj = {};
        response.headers.forEach((value, key) => {
            headersObj[key] = value;
        });
        throw {
            code: response.status,
            message: response.statusText,
            body: response.data,
            headers: headersObj,
            requestOptions: Object.assign(Object.assign({}, this.options), { 
                // Prevent credentials from leaking into error messages
                apiPass: 'omittedFromError', apiSecret: 'omittedFromError' }),
        };
    }
    /**
     * @private sign request and set recv window
     */
    signRequest(data, endpoint, method, signMethod) {
        return __awaiter(this, void 0, void 0, function* () {
            const timestamp = Date.now();
            const res = {
                originalParams: Object.assign({}, data),
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
                const signRequestParams = method === 'GET'
                    ? (0, requestUtils_1.serializeParams)(data, strictParamValidation, encodeQueryStringValues, '?')
                    : JSON.stringify(data) || '';
                const paramsStr = timestamp + method.toUpperCase() + endpoint + signRequestParams;
                // console.log('sign params: ', paramsStr);
                res.sign = yield (0, node_support_1.signMessage)(paramsStr, this.apiSecret, 'base64');
                res.queryParamsWithSign = signRequestParams;
                return res;
            }
            console.error(new Date(), (0, websocket_util_1.neverGuard)(signMethod, `Unhandled sign method: "${node_support_1.signMessage}"`));
            return res;
        });
    }
    prepareSignParams(method, endpoint, signMethod, params, isPublicApi) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    /** Returns an fetch request object. Handles signing process automatically if this is a private API call */
    buildRequest(method, endpoint, url, params, isPublicApi) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = Object.assign(Object.assign({}, this.globalRequestOptions), { url: url, method: method });
            for (const key in params) {
                if (typeof params[key] === 'undefined') {
                    delete params[key];
                }
            }
            if (isPublicApi || !this.apiKey || !this.apiPass) {
                return Object.assign(Object.assign({}, options), { params: params });
            }
            const signResult = yield this.prepareSignParams(method, endpoint, 'bitget', params, isPublicApi);
            const authHeaders = {
                'ACCESS-KEY': this.apiKey,
                'ACCESS-PASSPHRASE': this.apiPass,
                'ACCESS-TIMESTAMP': signResult.timestamp.toString(),
                'ACCESS-SIGN': signResult.sign,
            };
            if (method === 'GET') {
                return Object.assign(Object.assign({}, options), { headers: Object.assign(Object.assign({}, authHeaders), options.headers), url: options.url + signResult.queryParamsWithSign });
            }
            return Object.assign(Object.assign({}, options), { headers: Object.assign(Object.assign({}, authHeaders), options.headers), data: params });
        });
    }
}
exports.default = BaseRestClient;
//# sourceMappingURL=BaseRestClient.js.map