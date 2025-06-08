import WebSocket from 'isomorphic-ws';
import { BitgetInstTypeV2, WebsocketClientOptions, WsKey, WsTopicSubscribeEventArgsV2, WsTopicV2 } from './types';
import { DefaultLogger } from './util';
import { BaseWebsocketClient } from './util/BaseWSClient';
export declare class WebsocketClientV2 extends BaseWebsocketClient<WsKey, WsTopicSubscribeEventArgsV2> {
    protected logger: typeof DefaultLogger;
    protected options: WebsocketClientOptions;
    protected getWsKeyForTopic(subscribeEvent: WsTopicSubscribeEventArgsV2, isPrivate?: boolean): WsKey;
    protected isPrivateChannel(subscribeEvent: WsTopicSubscribeEventArgsV2): boolean;
    protected shouldAuthOnConnect(wsKey: WsKey): boolean;
    protected getWsUrl(wsKey: WsKey): string;
    protected getMaxTopicsPerSubscribeEvent(wsKey: WsKey): number | null;
    /**
     * Request connection of all dependent (public & private) websockets, instead of waiting for automatic connection by library
     */
    connectAll(): Promise<WebSocket | undefined>[];
    /** Some private channels use `coin` instead of `instId`. This method handles building the sub/unsub request */
    private getSubRequest;
    /**
     * Subscribe to a PUBLIC topic
     * @param instType instrument type (refer to API docs).
     * @param topic topic name (e.g. "ticker").
     * @param instId instrument ID (e.g. "BTCUSDT"). Use "default" for private topics.
     */
    subscribeTopic(instType: BitgetInstTypeV2, topic: WsTopicV2, coin?: string): void;
    /**
     * Unsubscribe from a topic
     * @param instType instrument type (refer to API docs).
     * @param topic topic name (e.g. "ticker").
     * @param instId instrument ID (e.g. "BTCUSDT"). Use "default" for private topics to get all symbols.
     */
    unsubscribeTopic(instType: BitgetInstTypeV2, topic: WsTopicV2, coin?: string): void;
}
