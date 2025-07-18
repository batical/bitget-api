import { APIResponse, CancelFuturesPlanTPSL, FuturesAccount, FuturesAccountBillRequest, FuturesBusinessBillRequest, FuturesCandleData, FuturesHistoricPositions, FuturesKlineInterval, FuturesMarginMode, FuturesMarketTrade, FuturesPagination, FuturesPlanType, FuturesPosition, FuturesProductType, FuturesSymbolRule, GetHistoricTradesParams, HistoricPlanOrderTPSLRequest, ModifyFuturesOrder, ModifyFuturesPlanOrder, ModifyFuturesPlanOrderTPSL, ModifyFuturesPlanStopOrder, NewBatchFuturesOrder, NewFuturesOrder, NewFuturesPlanOrder, NewFuturesPlanPositionTPSL, NewFuturesPlanStopOrder, NewFuturesPlanTrailingStopOrder, VIPFeeRate } from './types';
import BaseRestClient from './util/BaseRestClient';
/**
 * REST API client for the V1 bitget Futures APIs. These are the previous generation of Bitget's APIs and should be considered deprecated.
 * These will be removed in a future release, once Bitget formally deprecates them.
 *
 * @deprecated use RestClientV2 instead
 */
export declare class FuturesClient extends BaseRestClient {
    getClientType(): "futures";
    /**
     *
     * Market
     *
     */
    /** Get Symbols : Get basic configuration information of all trading pairs (including rules) */
    getSymbols(productType: FuturesProductType): Promise<APIResponse<FuturesSymbolRule[]>>;
    /** Get Depth */
    getDepth(symbol: string, limit?: string): Promise<APIResponse<any>>;
    /** Get Single Symbol Ticker */
    getTicker(symbol: string): Promise<APIResponse<any>>;
    /** Get All Tickers */
    getAllTickers(productType: FuturesProductType): Promise<APIResponse<any>>;
    /** Get VIP fee rates */
    getVIPFeeRates(): Promise<APIResponse<VIPFeeRate[]>>;
    /** Get most recent trades (up to 500, 100 by default) */
    getRecentTrades(symbol: string, limit?: string): Promise<APIResponse<FuturesMarketTrade[]>>;
    /** Get historic trades, up to 30 days at a time. Same-parameter responses are cached for 10 minutes. */
    getHistoricTrades(params: GetHistoricTradesParams): Promise<APIResponse<FuturesMarketTrade[]>>;
    /**
     * @deprecated use getRecentTrades() instead. This method will be removed soon.
     */
    getMarketTrades(symbol: string, limit?: string): Promise<APIResponse<FuturesMarketTrade[]>>;
    /** Get Candle Data */
    getCandles(symbol: string, granularity: FuturesKlineInterval, startTime: string, endTime: string, limit?: string, kLineType?: 'market' | 'mark' | 'index'): Promise<APIResponse<FuturesCandleData[]>>;
    /** Get symbol index price */
    getIndexPrice(symbol: string): Promise<APIResponse<any>>;
    /** Get symbol next funding time */
    getNextFundingTime(symbol: string): Promise<APIResponse<any>>;
    /** Get Withdraw List */
    getHistoricFundingRate(symbol: string, pageSize?: string, pageNo?: string, nextPage?: boolean): Promise<APIResponse<any>>;
    /** Get symbol current funding time */
    getCurrentFundingRate(symbol: string): Promise<APIResponse<any>>;
    /** Get symbol open interest */
    getOpenInterest(symbol: string): Promise<APIResponse<any>>;
    /** Get symbol mark price */
    getMarkPrice(symbol: string): Promise<APIResponse<any>>;
    /** Get symbol min/max leverage rules */
    getLeverageMinMax(symbol: string): Promise<APIResponse<any>>;
    /** Get Position Tier */
    getPositionTier(symbol: string, productType: FuturesProductType): Promise<APIResponse<any>>;
    /**
     *
     * Account Endpoints
     *
     */
    /** Get Single Account */
    getAccount(symbol: string, marginCoin: string): Promise<APIResponse<FuturesAccount>>;
    /** Get Account List */
    getAccounts(productType: FuturesProductType): Promise<APIResponse<any>>;
    /** Get Sub Account Contract Assets */
    getSubAccountContractAssets(productType: FuturesProductType): Promise<APIResponse<any>>;
    /**
     * This interface is only used to calculate the maximum number of positions that can be opened when the user does not hold a position by default.
     * The result does not represent the actual number of positions opened.
     */
    getOpenCount(symbol: string, marginCoin: string, openPrice: number, openAmount: number, leverage?: number): Promise<APIResponse<any>>;
    /** Change Leverage */
    setLeverage(symbol: string, marginCoin: string, leverage: string, holdSide?: string): Promise<APIResponse<any>>;
    /** Change Margin */
    setMargin(symbol: string, marginCoin: string, amount: string, holdSide?: string): Promise<APIResponse<any>>;
    /** Change Margin Mode */
    setMarginMode(symbol: string, marginCoin: string, marginMode: FuturesMarginMode): Promise<APIResponse<any>>;
    /** Change Hold Mode */
    setHoldMode(productType: FuturesProductType, holdMode: 'single_hold' | 'double_hold'): Promise<APIResponse<any>>;
    /** Get Symbol Position */
    getPosition(symbol: string, marginCoin?: string): Promise<APIResponse<FuturesPosition[]>>;
    /** Get Symbol Position V2 */
    getPositionV2(symbol: string, marginCoin: string): Promise<APIResponse<FuturesPosition[]>>;
    /** Get All Position */
    getPositions(productType: FuturesProductType, marginCoin?: string): Promise<APIResponse<FuturesPosition[]>>;
    /** Get All Position V2 */
    getPositionsV2(productType: FuturesProductType, marginCoin?: string): Promise<APIResponse<FuturesPosition[]>>;
    /** Get All historic positions, only supports Query within 3 months  */
    getHistoryPositions(params: FuturesHistoricPositions): Promise<APIResponse<FuturesPosition[]>>;
    /** Get Account Bill */
    getAccountBill(params: FuturesAccountBillRequest): Promise<APIResponse<any>>;
    /** Get Business Account Bill */
    getBusinessBill(params: FuturesBusinessBillRequest): Promise<APIResponse<any>>;
    /**
     *
     * Trade Endpoints
     *
     */
    /** Place Order */
    submitOrder(params: NewFuturesOrder): Promise<APIResponse<any>>;
    /** Batch Order */
    batchSubmitOrder(symbol: string, marginCoin: string, orders: NewBatchFuturesOrder[]): Promise<APIResponse<any>>;
    /** Cancel Order */
    cancelOrder(symbol: string, marginCoin: string, orderId?: string, clientOid?: string): Promise<APIResponse<any>>;
    /** Batch Cancel Order */
    batchCancelOrder(symbol: string, marginCoin: string, orderIds: string[]): Promise<APIResponse<any>>;
    /** Modify Order */
    modifyOrder(params: ModifyFuturesOrder): Promise<APIResponse<any>>;
    /**
     * Cancel all futures orders for a symbol
     */
    cancelSymbolOrders(symbol: string, marginCoin: string): Promise<APIResponse<any>>;
    /** Cancel All Order */
    cancelAllOrders(productType: FuturesProductType, marginCoin: string): Promise<APIResponse<any>>;
    /** Get Open Order */
    getOpenSymbolOrders(symbol: string): Promise<APIResponse<any>>;
    /** Get All Open Order */
    getOpenOrders(productType: FuturesProductType, marginCoin: string): Promise<APIResponse<any>>;
    /** Get History Orders */
    getOrderHistory(symbol: string, startTime: string, endTime: string, pageSize: string, lastEndId?: string, isPre?: boolean, clientOid?: string): Promise<APIResponse<any>>;
    /** Get ProductType History Orders */
    getProductTypeOrderHistory(productType: FuturesProductType, startTime: string, endTime: string, pageSize: string, lastEndId?: string, isPre?: boolean, clientOid?: string): Promise<APIResponse<any>>;
    /** Get order details */
    getOrder(symbol: string, orderId?: string, clientOid?: string): Promise<APIResponse<any>>;
    /** Get transaction details / history (fills)  */
    getOrderFills(symbol: string, orderId?: string, pagination?: FuturesPagination): Promise<APIResponse<any>>;
    /** Get ProductType Order fill detail */
    getProductTypeOrderFills(productType: FuturesProductType, pagination?: FuturesPagination): Promise<APIResponse<any>>;
    /** Place Plan order */
    submitPlanOrder(params: NewFuturesPlanOrder): Promise<APIResponse<any>>;
    /** Modify Plan Order */
    modifyPlanOrder(params: ModifyFuturesPlanOrder): Promise<APIResponse<any>>;
    /** Modify Plan Order TPSL */
    modifyPlanOrderTPSL(params: ModifyFuturesPlanOrderTPSL): Promise<APIResponse<any>>;
    /** Place Stop order */
    submitStopOrder(params: NewFuturesPlanStopOrder): Promise<APIResponse<any>>;
    /** Place Trailing Stop order */
    submitTrailingStopOrder(params: NewFuturesPlanTrailingStopOrder): Promise<APIResponse<any>>;
    /** Place Position TPSL */
    submitPositionTPSL(params: NewFuturesPlanPositionTPSL): Promise<APIResponse<any>>;
    /** Modify Stop Order */
    modifyStopOrder(params: ModifyFuturesPlanStopOrder): Promise<APIResponse<any>>;
    /** Cancel Plan Order (TPSL) */
    cancelPlanOrderTPSL(params: CancelFuturesPlanTPSL): Promise<APIResponse<any>>;
    /** Cancel Symbol Plan Order (TPSL) */
    cancelSymbolPlanOrders(symbol: string, planType: FuturesPlanType): Promise<APIResponse<any>>;
    /** Cancel All Trigger Order (TPSL) */
    cancelAllPlanOrders(productType: FuturesProductType, planType: FuturesPlanType): Promise<APIResponse<any>>;
    /** Get Plan Order (TPSL) List */
    getPlanOrderTPSLs(symbol: string, isPlan?: string, productType?: FuturesProductType): Promise<APIResponse<any>>;
    /** Get History Plan Orders (TPSL) */
    getHistoricPlanOrdersTPSL(params: HistoricPlanOrderTPSLRequest): Promise<APIResponse<any>>;
    /**
     *
     * Copy Trade Endpoints
     *
     */
    /** Get Trader Open order */
    getCopyTraderOpenOrder(symbol: string, productType: FuturesProductType, pageSize: number, pageNo: number): Promise<APIResponse<any>>;
    /** Get Followers Open Order */
    getCopyFollowersOpenOrder(symbol: string, productType: FuturesProductType, pageSize: number, pageNo: number): Promise<APIResponse<any>>;
    /** Trader Close Position */
    closeCopyTraderPosition(symbol: string, trackingNo: string): Promise<APIResponse<any>>;
    /** Trader Modify TPSL */
    modifyCopyTraderTPSL(symbol: string, trackingNo: string, changes?: {
        stopProfitPrice?: number;
        stopLossPrice?: number;
    }): Promise<APIResponse<any>>;
    /** Get Traders History Orders */
    getCopyTraderOrderHistory(startTime: string, endTime: string, pageSize: number, pageNo: number): Promise<APIResponse<any>>;
    /** Get Trader Profit Summary */
    getCopyTraderProfitSummary(): Promise<APIResponse<any>>;
    /** Get Trader History Profit Summary (according to settlement currency) */
    getCopyTraderHistoricProfitSummary(): Promise<APIResponse<any>>;
    /** Get Trader History Profit Summary (according to settlement currency and date) */
    getCopyTraderHistoricProfitSummaryByDate(marginCoin: string, dateMs: string, pageSize: number, pageNo: number): Promise<APIResponse<any>>;
    /** Get Trader Histroy Profit Detail */
    getCopyTraderHistoricProfitDetail(marginCoin: string, dateMs: string, pageSize: number, pageNo: number): Promise<APIResponse<any>>;
    /** Get Trader Profits Details */
    getCopyTraderProfitDetails(pageSize: number, pageNo: number): Promise<APIResponse<any>>;
    /** Get CopyTrade Symbols */
    getCopyTraderSymbols(): Promise<APIResponse<any>>;
    /** Trader Change CopyTrade symbol */
    setCopyTraderSymbols(symbol: string, operation: 'add' | 'delete'): Promise<APIResponse<any>>;
}
