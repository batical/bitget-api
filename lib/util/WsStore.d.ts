import WebSocket from 'isomorphic-ws';
import { DefaultLogger } from './logger';
import { WsConnectionStateEnum, WsStoredState } from './WsStore.types';
export default class WsStore<WsKey extends string, TWSTopicSubscribeEventArgs extends object> {
    private wsState;
    private logger;
    constructor(logger: typeof DefaultLogger);
    /** Get WS stored state for key, optionally create if missing */
    get(key: WsKey, createIfMissing?: true): WsStoredState<TWSTopicSubscribeEventArgs>;
    get(key: WsKey, createIfMissing?: false): WsStoredState<TWSTopicSubscribeEventArgs> | undefined;
    getKeys(): WsKey[];
    create(key: WsKey): WsStoredState<TWSTopicSubscribeEventArgs> | undefined;
    delete(key: WsKey): void;
    hasExistingActiveConnection(key: WsKey): boolean;
    getWs(key: WsKey): WebSocket | undefined;
    setWs(key: WsKey, wsConnection: WebSocket): WebSocket;
    isWsOpen(key: WsKey): boolean;
    getConnectionState(key: WsKey): WsConnectionStateEnum;
    setConnectionState(key: WsKey, state: WsConnectionStateEnum): void;
    isConnectionState(key: WsKey, state: WsConnectionStateEnum): boolean;
    getTopics(key: WsKey): Set<TWSTopicSubscribeEventArgs>;
    getTopicsByKey(): Record<string, Set<TWSTopicSubscribeEventArgs>>;
    getMatchingTopic(key: WsKey, topic: TWSTopicSubscribeEventArgs): TWSTopicSubscribeEventArgs | undefined;
    addTopic(key: WsKey, topic: TWSTopicSubscribeEventArgs): Set<TWSTopicSubscribeEventArgs>;
    deleteTopic(key: WsKey, topic: TWSTopicSubscribeEventArgs): Set<TWSTopicSubscribeEventArgs>;
}
