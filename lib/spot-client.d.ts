import { APIResponse, BatchCancelSpotOrderV2, CancelSpotOrderV2, CancelSpotPlanOrderParams, CoinBalance, GetHistoricPlanOrdersParams, GetHistoricTradesParams, GetSpotPlanOrdersParams, ModifySpotPlanOrder, NewBatchSpotOrder, NewSpotOrder, NewSpotPlanOrder, NewSpotSubTransfer, NewSpotWithdraw, NewWalletTransfer, Pagination, SpotCandleData, SpotKlineInterval, SpotMarketTrade, SpotOrderResult, SpotPlanOrder, SymbolRules, VIPFeeRate } from './types';
import BaseRestClient from './util/BaseRestClient';
/**
 * REST API client for the V1 bitget Spot APIs. These are the previous generation of Bitget's APIs and should be considered deprecated.
 * These will be removed in a future release, once Bitget formally deprecates them.
 *
 * @deprecated use RestClientV2 instead
 */
export declare class SpotClient extends BaseRestClient {
    getClientType(): "spot";
    fetchServerTime(): Promise<number>;
    /**
     *
     * Public
     *
     */
    /** Get Server Time */
    getServerTime(): Promise<APIResponse<string>>;
    /** Get Coin List : Get all coins information on the platform */
    getCoins(): Promise<APIResponse<any[]>>;
    /** Get Symbols : Get basic configuration information of all trading pairs (including rules) */
    getSymbols(): Promise<APIResponse<SymbolRules[]>>;
    /** Get Single Symbol : Get basic configuration information for one symbol */
    getSymbol(symbol: string): Promise<APIResponse<any>>;
    /**
     *
     * Market
     *
     */
    /** Get Single Ticker */
    getTicker(symbol: string): Promise<APIResponse<any>>;
    /** Get All Tickers */
    getAllTickers(): Promise<APIResponse<any>>;
    /** Get most recent trades (up to 500, 100 by default) */
    getRecentTrades(symbol: string, limit?: string): Promise<APIResponse<SpotMarketTrade[]>>;
    /** Get historic trades, up to 30 days at a time. Same-parameter responses are cached for 10 minutes. */
    getHistoricTrades(params: GetHistoricTradesParams): Promise<APIResponse<SpotMarketTrade[]>>;
    /**
     * @deprecated use getRecentTrades() instead. This method will be removed soon.
     */
    getMarketTrades(symbol: string, limit?: string): Promise<APIResponse<SpotMarketTrade[]>>;
    /** Get Candle Data */
    getCandles(symbol: string, period: SpotKlineInterval, pagination?: Pagination): Promise<APIResponse<SpotCandleData[]>>;
    /** Get Depth */
    getDepth(symbol: string, type: 'step0' | 'step1' | 'step2' | 'step3' | 'step4' | 'step5', limit?: string): Promise<APIResponse<any>>;
    /** Get VIP fee rates */
    getVIPFeeRates(): Promise<APIResponse<VIPFeeRate[]>>;
    /**
     *
     * Wallet Endpoints
     *
     */
    /** Initiate wallet transfer */
    transfer(params: NewWalletTransfer): Promise<APIResponse<any>>;
    /** Initiate wallet transfer (v2 endpoint) */
    transferV2(params: NewWalletTransfer): Promise<APIResponse<any>>;
    /**
     * Transfer main-sub, sub-sub or sub-main
     */
    subTransfer(params: NewSpotSubTransfer): Promise<APIResponse<any>>;
    /** Get Coin Address */
    getDepositAddress(coin: string, chain?: string): Promise<APIResponse<any>>;
    /** Withdraw Coins On Chain */
    withdraw(params: NewSpotWithdraw): Promise<APIResponse<any>>;
    /** Withdraw Coins On Chain (v2 endpoint) */
    withdrawV2(params: NewSpotWithdraw): Promise<APIResponse<any>>;
    /** Inner Withdraw : Internal withdrawal means that both users are on the Bitget platform */
    innerWithdraw(coin: string, toUid: string, amount: string, clientOid?: string): Promise<APIResponse<any>>;
    /** Inner Withdraw (v2 endpoint) : Internal withdrawal means that both users are on the Bitget platform */
    innerWithdrawV2(coin: string, toUid: string, amount: string, clientOid?: string): Promise<APIResponse<any>>;
    /** Get Withdraw List */
    getWithdrawals(coin: string, startTime: string, endTime: string, pageSize?: string, pageNo?: string, clientOid?: string): Promise<APIResponse<any>>;
    /** Get Deposit List */
    getDeposits(coin: string, startTime: string, endTime: string, pageSize?: string, pageNo?: string): Promise<APIResponse<any>>;
    /**
     *
     * Account Endpoints
     *
     */
    /** Get ApiKey Info */
    getApiKeyInfo(): Promise<APIResponse<any>>;
    /** Get Account : get account assets */
    getBalance(coin?: string): Promise<APIResponse<CoinBalance[]>>;
    /** Get sub Account Spot Asset */
    getSubAccountSpotAssets(): Promise<APIResponse<any>>;
    /** Get Bills : get transaction detail flow */
    getTransactionHistory(params?: {
        coinId?: number;
        groupType?: string;
        bizType?: string;
        after?: string;
        before?: string;
        limit?: number;
    }): Promise<APIResponse<any>>;
    /** Get Transfer List */
    getTransferHistory(params?: {
        coinId?: number;
        fromType?: string;
        after?: string;
        before?: string;
        limit?: number;
        clientOid?: string;
    }): Promise<APIResponse<any>>;
    /**
     *
     * Trade Endpoints
     *
     */
    /** Place order */
    submitOrder(params: NewSpotOrder): Promise<APIResponse<SpotOrderResult>>;
    /** Place orders in batches, up to 50 at a time */
    batchSubmitOrder(symbol: string, orderList: NewBatchSpotOrder[]): Promise<APIResponse<any>>;
    /** Cancel order */
    cancelOrder(symbol: string, orderId: string): Promise<APIResponse<any>>;
    /** Cancel order (v2 endpoint - supports orderId or clientOid) */
    cancelOrderV2(params?: CancelSpotOrderV2): Promise<APIResponse<any>>;
    /**
     * Cancel all spot orders for a symbol
     */
    cancelSymbolOrders(symbol: string): Promise<APIResponse<any>>;
    /** Cancel order in batch (per symbol) */
    batchCancelOrder(symbol: string, orderIds: string[]): Promise<APIResponse<any>>;
    /** Cancel order in batch (per symbol). V2 endpoint, supports orderIds or clientOids. */
    batchCancelOrderV2(params: BatchCancelSpotOrderV2): Promise<APIResponse<any>>;
    /** Get order details */
    getOrder(symbol: string, orderId: string, clientOrderId?: string): Promise<APIResponse<any>>;
    /** Get order list (open orders) */
    getOpenOrders(symbol?: string): Promise<APIResponse<any>>;
    /** Get order history for a symbol */
    getOrderHistory(symbol: string, pagination?: Pagination): Promise<APIResponse<any>>;
    /** Get transaction details / history (fills) for an order */
    getOrderFills(symbol: string, orderId: string, pagination?: Pagination): Promise<APIResponse<any>>;
    /** Place plan order */
    submitPlanOrder(params: NewSpotPlanOrder): Promise<APIResponse<SpotOrderResult>>;
    /** Modify plan order */
    modifyPlanOrder(params: ModifySpotPlanOrder): Promise<APIResponse<SpotOrderResult>>;
    /** Cancel plan order */
    cancelPlanOrder(params: CancelSpotPlanOrderParams): Promise<APIResponse<string>>;
    /** Get current plan orders */
    getCurrentPlanOrders(params: GetSpotPlanOrdersParams): Promise<APIResponse<{
        nextFlag: boolean;
        endId: number;
        orderList: SpotPlanOrder[];
    }>>;
    /** Get history plan orders */
    getHistoricPlanOrders(params: GetHistoricPlanOrdersParams): Promise<APIResponse<{
        nextFlag: boolean;
        endId: number;
        orderList: SpotPlanOrder[];
    }>>;
}
