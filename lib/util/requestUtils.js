"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REST_CLIENT_TYPE_ENUM = exports.isWsPong = exports.getRestBaseUrl = exports.serializeParams = void 0;
function serializeParams(params, strict_validation = false, encodeValues = true, prefixWith = '') {
    if (!params) {
        return '';
    }
    const queryString = Object.keys(params)
        .sort()
        .map((key) => {
        const value = params[key];
        if (strict_validation === true && typeof value === 'undefined') {
            throw new Error('Failed to sign API request due to undefined parameter');
        }
        const encodedValue = encodeValues ? encodeURIComponent(value) : value;
        return `${key}=${encodedValue}`;
    })
        .join('&');
    // Only prefix if there's a value
    return queryString ? prefixWith + queryString : queryString;
}
exports.serializeParams = serializeParams;
function getRestBaseUrl(useTestnet, restInverseOptions) {
    const exchangeBaseUrls = {
        livenet: 'https://api.bitget.com',
        livenet2: 'https://capi.bitget.com',
        testnet: 'https://noTestnet',
    };
    if (restInverseOptions.baseUrl) {
        return restInverseOptions.baseUrl;
    }
    if (useTestnet) {
        return exchangeBaseUrls.testnet;
    }
    return exchangeBaseUrls.livenet;
}
exports.getRestBaseUrl = getRestBaseUrl;
function isWsPong(msg) {
    // bitget
    if ((msg === null || msg === void 0 ? void 0 : msg.data) === 'pong') {
        return true;
    }
    return false;
}
exports.isWsPong = isWsPong;
/**
 * Used to switch how authentication/requests work under the hood (primarily for SPOT since it's different there)
 */
exports.REST_CLIENT_TYPE_ENUM = {
    spot: 'spot',
    futures: 'futures',
    broker: 'broker',
    v2: 'v2',
};
//# sourceMappingURL=requestUtils.js.map