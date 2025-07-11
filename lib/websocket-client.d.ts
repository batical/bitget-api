/// <reference types="node" />
import { EventEmitter } from 'events';
import WebSocket from 'isomorphic-ws';
import { BitgetInstType, WSClientConfigurableOptions, WsKey, WsTopic, WsTopicSubscribeEventArgs } from './types';
import { DefaultLogger } from './util';
export type WsClientEvent = 'open' | 'update' | 'close' | 'exception' | 'reconnect' | 'reconnected' | 'response';
interface WebsocketClientEvents {
    /** Connection opened. If this connection was previously opened and reconnected, expect the reconnected event instead */
    open: (evt: {
        wsKey: WsKey;
        event: any;
    }) => void;
    /** Reconnecting a dropped connection */
    reconnect: (evt: {
        wsKey: WsKey;
        event: any;
    }) => void;
    /** Successfully reconnected a connection that dropped */
    reconnected: (evt: {
        wsKey: WsKey;
        event: any;
    }) => void;
    /** Connection closed */
    close: (evt: {
        wsKey: WsKey;
        event: any;
    }) => void;
    /** Received reply to websocket command (e.g. after subscribing to topics) */
    response: (response: any & {
        wsKey: WsKey;
    }) => void;
    /** Received data for topic */
    update: (response: any & {
        wsKey: WsKey;
    }) => void;
    /** Exception from ws client OR custom listeners (e.g. if you throw inside your event handler) */
    exception: (response: any & {
        wsKey: WsKey;
    }) => void;
    /** Confirmation that a connection successfully authenticated */
    authenticated: (event: {
        wsKey: WsKey;
        event: any;
    }) => void;
}
export declare interface WebsocketClient {
    on<U extends keyof WebsocketClientEvents>(event: U, listener: WebsocketClientEvents[U]): this;
    emit<U extends keyof WebsocketClientEvents>(event: U, ...args: Parameters<WebsocketClientEvents[U]>): boolean;
}
/**
 * @deprecated use WebsocketClientV2 instead
 */
export declare class WebsocketClient extends EventEmitter {
    private logger;
    private options;
    private wsStore;
    constructor(options: WSClientConfigurableOptions, logger?: typeof DefaultLogger);
    /**
     * Subscribe to topics & track/persist them. They will be automatically resubscribed to if the connection drops/reconnects.
     * @param wsTopics topic or list of topics
     * @param isPrivateTopic optional - the library will try to detect private topics, you can use this to mark a topic as private (if the topic isn't recognised yet)
     */
    subscribe(wsTopics: WsTopicSubscribeEventArgs[] | WsTopicSubscribeEventArgs, isPrivateTopic?: boolean): void;
    /**
     * Unsubscribe from topics & remove them from memory. They won't be re-subscribed to if the connection reconnects.
     * @param wsTopics topic or list of topics
     * @param isPrivateTopic optional - the library will try to detect private topics, you can use this to mark a topic as private (if the topic isn't recognised yet)
     */
    unsubscribe(wsTopics: WsTopicSubscribeEventArgs[] | WsTopicSubscribeEventArgs, isPrivateTopic?: boolean): void;
    /** Get the WsStore that tracks websockets & topics */
    getWsStore(): typeof this.wsStore;
    close(wsKey: WsKey, force?: boolean): void;
    closeAll(force?: boolean): void;
    /**
     * Request connection of all dependent (public & private) websockets, instead of waiting for automatic connection by library
     */
    connectAll(): Promise<WebSocket | undefined>[];
    /**
     * Request connection to a specific websocket, instead of waiting for automatic connection.
     */
    private connect;
    private parseWsError;
    /** Get a signature, build the auth request and send it */
    private sendAuthRequest;
    private reconnectWithDelay;
    private ping;
    private clearTimers;
    private clearPingTimer;
    private clearPongTimer;
    /**
     * @private Use the `subscribe(topics)` method to subscribe to topics. Send WS message to subscribe to topics.
     */
    private requestSubscribeTopics;
    /**
     * @private Use the `unsubscribe(topics)` method to unsubscribe from topics. Send WS message to unsubscribe from topics.
     */
    private requestUnsubscribeTopics;
    tryWsSend(wsKey: WsKey, wsMessage: string): void;
    private connectToWsUrl;
    private onWsOpen;
    /** Handle subscription to private topics _after_ authentication successfully completes asynchronously */
    private onWsAuthenticated;
    private onWsMessage;
    private onWsClose;
    private getWs;
    private setWsState;
    private getWsUrl;
    /**
     * Subscribe to a topic
     * @param instType instrument type (refer to API docs).
     * @param topic topic name (e.g. "ticker").
     * @param instId instrument ID (e.g. "BTCUSDT"). Use "default" for private topics.
     *
     * @deprecated use WebsocketClientV2 instead
     */
    subscribeTopic(instType: BitgetInstType, topic: WsTopic, instId?: string): void;
    /**
     * Unsubscribe from a topic
     * @param instType instrument type (refer to API docs).
     * @param topic topic name (e.g. "ticker").
     * @param instId instrument ID (e.g. "BTCUSDT"). Use "default" for private topics to get all symbols.
     *
     * @deprecated use WebsocketClientV2 instead
     */
    unsubscribeTopic(instType: BitgetInstType, topic: WsTopic, instId?: string): void;
}
export {};
