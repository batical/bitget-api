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
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeTerminateWs = exports.getWsAuthSignature = exports.neverGuard = exports.WS_ERROR_ENUM = exports.getMaxTopicsPerSubscribeEvent = exports.getWsKeyForTopicV2 = exports.getWsKeyForTopic = exports.isPrivateChannel = exports.PRIVATE_TOPICS_V2 = exports.PRIVATE_TOPICS = exports.PUBLIC_WS_KEYS = exports.WS_AUTH_ON_CONNECT_KEYS = exports.WS_KEY_MAP = exports.WS_BASE_URL_MAP = void 0;
const node_support_1 = require("./node-support");
exports.WS_BASE_URL_MAP = {
    mixv1: {
        all: {
            livenet: 'wss://ws.bitget.com/mix/v1/stream',
        },
    },
    spotv1: {
        all: {
            livenet: 'wss://ws.bitget.com/spot/v1/stream',
        },
    },
    v2Public: {
        all: {
            livenet: 'wss://ws.bitget.com/v2/ws/public',
        },
    },
    v2Private: {
        all: {
            livenet: 'wss://ws.bitget.com/v2/ws/private',
        },
    },
};
/** Should be one WS key per unique URL */
exports.WS_KEY_MAP = {
    spotv1: 'spotv1',
    mixv1: 'mixv1',
    v2Public: 'v2Public',
    v2Private: 'v2Private',
};
/** Any WS keys in this list will trigger auth on connect, if credentials are available */
exports.WS_AUTH_ON_CONNECT_KEYS = [
    exports.WS_KEY_MAP.spotv1,
    exports.WS_KEY_MAP.mixv1,
    exports.WS_KEY_MAP.v2Private,
];
/** Any WS keys in this list will ALWAYS skip the authentication process, even if credentials are available */
exports.PUBLIC_WS_KEYS = [];
/**
 * Used to automatically determine if a sub request should be to a public or private ws (when there's two separate connections).
 * Unnecessary if there's only one connection to handle both public & private topics.
 */
exports.PRIVATE_TOPICS = ['account', 'orders', 'positions', 'ordersAlgo'];
exports.PRIVATE_TOPICS_V2 = [
    'account',
    'orders',
    'positions',
    'orders-algo',
    'positions-history',
    'orders-crossed',
    'account-crossed',
    'account-isolated',
    'orders-isolated',
];
function isPrivateChannel(channel) {
    return (exports.PRIVATE_TOPICS.includes(channel) ||
        exports.PRIVATE_TOPICS_V2.includes(channel));
}
exports.isPrivateChannel = isPrivateChannel;
function getWsKeyForTopic(subscribeEvent, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
isPrivate) {
    const instType = subscribeEvent.instType.toUpperCase();
    switch (instType) {
        case 'SP':
        case 'SPBL': {
            return exports.WS_KEY_MAP.spotv1;
        }
        case 'MC':
        case 'UMCBL':
        case 'DMCBL': {
            return exports.WS_KEY_MAP.mixv1;
        }
        default: {
            throw neverGuard(instType, `getWsKeyForTopic(): Unhandled market ${'instrumentId'}`);
        }
    }
}
exports.getWsKeyForTopic = getWsKeyForTopic;
function getWsKeyForTopicV2(subscribeEvent, isPrivate) {
    return isPrivate || isPrivateChannel(subscribeEvent.channel)
        ? exports.WS_KEY_MAP.v2Private
        : exports.WS_KEY_MAP.v2Public;
}
exports.getWsKeyForTopicV2 = getWsKeyForTopicV2;
/** Force subscription requests to be sent in smaller batches, if a number is returned */
function getMaxTopicsPerSubscribeEvent(wsKey) {
    switch (wsKey) {
        case 'mixv1':
        case 'spotv1':
        case 'v2Public':
        case 'v2Private': {
            // Technically there doesn't seem to be a documented cap, but there is a size limit per request. Doesn't hurt to batch requests.
            return 15;
        }
        default: {
            throw neverGuard(wsKey, 'getWsKeyForTopic(): Unhandled wsKey');
        }
    }
}
exports.getMaxTopicsPerSubscribeEvent = getMaxTopicsPerSubscribeEvent;
exports.WS_ERROR_ENUM = {
    INVALID_ACCESS_KEY: 30011,
};
function neverGuard(x, msg) {
    return new Error(`Unhandled value exception "${x}", ${msg}`);
}
exports.neverGuard = neverGuard;
function getWsAuthSignature(apiKey, apiSecret, apiPass, recvWindow = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!apiKey || !apiSecret || !apiPass) {
            throw new Error('Cannot auth - missing api key, secret or passcode in config');
        }
        const signatureExpiresAt = ((Date.now() + recvWindow) / 1000).toFixed(0);
        const signature = yield (0, node_support_1.signMessage)(signatureExpiresAt + 'GET' + '/user/verify', apiSecret, 'base64');
        return {
            expiresAt: Number(signatureExpiresAt),
            signature,
        };
    });
}
exports.getWsAuthSignature = getWsAuthSignature;
/**
 * #305: ws.terminate() is undefined in browsers.
 * This only works in node.js, not in browsers.
 * Does nothing if `ws` is undefined. Does nothing in browsers.
 */
function safeTerminateWs(ws, fallbackToClose) {
    if (!ws) {
        return false;
    }
    if (typeof ws['terminate'] === 'function') {
        ws.terminate();
        return true;
    }
    else if (fallbackToClose) {
        ws.close();
    }
    return false;
}
exports.safeTerminateWs = safeTerminateWs;
//# sourceMappingURL=websocket-util.js.map