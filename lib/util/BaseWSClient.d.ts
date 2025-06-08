/// <reference types="node" />
import EventEmitter from 'events';
import WebSocket from 'isomorphic-ws';
import { WebsocketClientOptions, WSClientConfigurableOptions } from '../types/index';
import { DefaultLogger } from './logger';
import WsStore from './WsStore';
interface WSClientEventMap<WsKey extends string> {
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
export interface BaseWebsocketClient<TWSKey extends string, TWSTopicSubscribeEventArgs extends object> {
    on<U extends keyof WSClientEventMap<TWSKey>>(event: U, listener: WSClientEventMap<TWSKey>[U]): this;
    emit<U extends keyof WSClientEventMap<TWSKey>>(event: U, ...args: Parameters<WSClientEventMap<TWSKey>[U]>): boolean;
}
export declare abstract class BaseWebsocketClient<TWSKey extends string, TWSTopicSubscribeEventArgs extends object> extends EventEmitter {
    private wsStore;
    protected logger: typeof DefaultLogger;
    protected options: WebsocketClientOptions;
    constructor(options: WSClientConfigurableOptions, logger?: typeof DefaultLogger);
    protected abstract getWsKeyForTopic(subscribeEvent: TWSTopicSubscribeEventArgs, isPrivate?: boolean): TWSKey;
    protected abstract isPrivateChannel(subscribeEvent: TWSTopicSubscribeEventArgs): boolean;
    protected abstract shouldAuthOnConnect(wsKey: TWSKey): boolean;
    protected abstract getWsUrl(wsKey: TWSKey): string;
    protected abstract getMaxTopicsPerSubscribeEvent(wsKey: TWSKey): number | null;
    /**
     * Request connection of all dependent (public & private) websockets, instead of waiting for automatic connection by library
     */
    abstract connectAll(): Promise<WebSocket | undefined>[];
    /**
     * Subscribe to topics & track/persist them. They will be automatically resubscribed to if the connection drops/reconnects.
     * @param wsTopics topic or list of topics
     * @param isPrivateTopic optional - the library will try to detect private topics, you can use this to mark a topic as private (if the topic isn't recognised yet)
     */
    subscribe(wsTopics: TWSTopicSubscribeEventArgs[] | TWSTopicSubscribeEventArgs, isPrivateTopic?: boolean): void;
    /**
     * Unsubscribe from topics & remove them from memory. They won't be re-subscribed to if the connection reconnects.
     * @param wsTopics topic or list of topics
     * @param isPrivateTopic optional - the library will try to detect private topics, you can use this to mark a topic as private (if the topic isn't recognised yet)
     */
    unsubscribe(wsTopics: TWSTopicSubscribeEventArgs[] | TWSTopicSubscribeEventArgs, isPrivateTopic?: boolean): void;
    /** Get the WsStore that tracks websockets & topics */
    getWsStore(): WsStore<TWSKey, TWSTopicSubscribeEventArgs>;
    close(wsKey: TWSKey, force?: boolean): void;
    closeAll(force?: boolean): void;
    /**
     * Request connection to a specific websocket, instead of waiting for automatic connection.
     */
    protected connect(wsKey: TWSKey): Promise<WebSocket | undefined>;
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
    tryWsSend(wsKey: TWSKey, wsMessage: string): void;
    private connectToWsUrl;
    private onWsOpen;
    /** Handle subscription to private topics _after_ authentication successfully completes asynchronously */
    private onWsAuthenticated;
    private onWsMessage;
    private onWsClose;
    private getWs;
    private setWsState;
}
export {};
