export interface RestClientOptions {
    /** Your API key */
    apiKey?: string;
    /** Your API secret */
    apiSecret?: string;
    /** The passphrase you set when creating the API Key (NOT your account password) */
    apiPass?: string;
    /** Set to `true` to connect to testnet. Uses the live environment by default. */
    /**
     * Set to `true` to use Bitget's demo trading: https://www.bitget.com/api-doc/common/demotrading/restapi.
     *
     * Disabled by default.
     */
    demoTrading?: boolean;
    /** Override the max size of the request window (in ms) */
    recvWindow?: number;
    /** Default: false. If true, we'll throw errors if any params are undefined */
    strictParamValidation?: boolean;
    /**
     * Default: true.
     * If true, query string values will be URI Encoded (encodeURIComponent).
     * This prevents sign errors with GET requests containing unusual parameters (spaces, symbols, etc).
     */
    encodeQueryStringValues?: boolean;
    /**
     * Optionally override API protocol + domain
     * e.g baseUrl: 'https://api.bitget.com'
     **/
    baseUrl?: string;
    /** Default: true. whether to try and post-process request exceptions (and throw them). */
    parseExceptions?: boolean;
}
export declare function serializeParams<T extends object | undefined = object>(params: T, strict_validation?: boolean, encodeValues?: boolean, prefixWith?: string): string;
export declare function getRestBaseUrl(useTestnet: boolean, restInverseOptions: RestClientOptions): string;
export declare function isWsPong(msg: any): boolean;
/**
 * Used to switch how authentication/requests work under the hood (primarily for SPOT since it's different there)
 */
export declare const REST_CLIENT_TYPE_ENUM: {
    readonly spot: "spot";
    readonly futures: "futures";
    readonly broker: "broker";
    readonly v2: "v2";
};
