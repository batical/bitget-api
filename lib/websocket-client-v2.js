"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketClientV2 = void 0;
const util_1 = require("./util");
const BaseWSClient_1 = require("./util/BaseWSClient");
const LOGGER_CATEGORY = { category: 'bitget-ws' };
const COIN_CHANNELS = [
    'account',
    'account-crossed',
    'account-isolated',
];
class WebsocketClientV2 extends BaseWSClient_1.BaseWebsocketClient {
    getWsKeyForTopic(subscribeEvent, isPrivate) {
        return isPrivate || (0, util_1.isPrivateChannel)(subscribeEvent.channel)
            ? util_1.WS_KEY_MAP.v2Private
            : util_1.WS_KEY_MAP.v2Public;
    }
    isPrivateChannel(subscribeEvent) {
        return (0, util_1.isPrivateChannel)(subscribeEvent.channel);
    }
    shouldAuthOnConnect(wsKey) {
        return util_1.WS_AUTH_ON_CONNECT_KEYS.includes(wsKey);
    }
    getWsUrl(wsKey) {
        if (this.options.wsUrl) {
            return this.options.wsUrl;
        }
        const networkKey = 'livenet';
        switch (wsKey) {
            case util_1.WS_KEY_MAP.spotv1:
            case util_1.WS_KEY_MAP.mixv1: {
                throw new Error('Use the WebsocketClient instead of WebsocketClientV2 for V1 websockets');
            }
            case util_1.WS_KEY_MAP.v2Private: {
                return util_1.WS_BASE_URL_MAP.v2Private.all[networkKey];
            }
            case util_1.WS_KEY_MAP.v2Public: {
                return util_1.WS_BASE_URL_MAP.v2Public.all[networkKey];
            }
            default: {
                this.logger.error('getWsUrl(): Unhandled wsKey: ', Object.assign(Object.assign({}, LOGGER_CATEGORY), { wsKey }));
                throw (0, util_1.neverGuard)(wsKey, 'getWsUrl(): Unhandled wsKey');
            }
        }
    }
    getMaxTopicsPerSubscribeEvent(wsKey) {
        return (0, util_1.getMaxTopicsPerSubscribeEvent)(wsKey);
    }
    /**
     * Request connection of all dependent (public & private) websockets, instead of waiting for automatic connection by library
     */
    connectAll() {
        return [
            this.connect(util_1.WS_KEY_MAP.v2Private),
            this.connect(util_1.WS_KEY_MAP.v2Public),
        ];
    }
    /** Some private channels use `coin` instead of `instId`. This method handles building the sub/unsub request */
    getSubRequest(instType, topic, coin = 'default') {
        if ((0, util_1.isPrivateChannel)(topic)) {
            if (COIN_CHANNELS.includes(topic)) {
                const subscribeRequest = {
                    instType,
                    channel: topic,
                    coin,
                };
                return subscribeRequest;
            }
            const subscribeRequest = {
                instType,
                channel: topic,
                instId: coin,
            };
            return subscribeRequest;
        }
        return {
            instType,
            channel: topic,
            instId: coin,
        };
    }
    /**
     * Subscribe to a PUBLIC topic
     * @param instType instrument type (refer to API docs).
     * @param topic topic name (e.g. "ticker").
     * @param instId instrument ID (e.g. "BTCUSDT"). Use "default" for private topics.
     */
    subscribeTopic(instType, topic, coin = 'default') {
        const subRequest = this.getSubRequest(instType, topic, coin);
        return this.subscribe(subRequest);
    }
    /**
     * Unsubscribe from a topic
     * @param instType instrument type (refer to API docs).
     * @param topic topic name (e.g. "ticker").
     * @param instId instrument ID (e.g. "BTCUSDT"). Use "default" for private topics to get all symbols.
     */
    unsubscribeTopic(instType, topic, coin = 'default') {
        const subRequest = this.getSubRequest(instType, topic, coin);
        return this.unsubscribe(subRequest);
    }
}
exports.WebsocketClientV2 = WebsocketClientV2;
//# sourceMappingURL=websocket-client-v2.js.map