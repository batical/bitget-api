"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuturesClient = void 0;
const util_1 = require("./util");
const BaseRestClient_1 = __importDefault(require("./util/BaseRestClient"));
/**
 * REST API client for the V1 bitget Futures APIs. These are the previous generation of Bitget's APIs and should be considered deprecated.
 * These will be removed in a future release, once Bitget formally deprecates them.
 *
 * @deprecated use RestClientV2 instead
 */
class FuturesClient extends BaseRestClient_1.default {
    getClientType() {
        return util_1.REST_CLIENT_TYPE_ENUM.futures;
    }
    /**
     *
     * Market
     *
     */
    /** Get Symbols : Get basic configuration information of all trading pairs (including rules) */
    getSymbols(productType) {
        return this.get('/api/mix/v1/market/contracts', { productType });
    }
    /** Get Depth */
    getDepth(symbol, limit) {
        return this.get('/api/mix/v1/market/depth', { symbol, limit });
    }
    /** Get Single Symbol Ticker */
    getTicker(symbol) {
        return this.get('/api/mix/v1/market/ticker', { symbol });
    }
    /** Get All Tickers */
    getAllTickers(productType) {
        return this.get('/api/mix/v1/market/tickers', { productType });
    }
    /** Get VIP fee rates */
    getVIPFeeRates() {
        return this.get('/api/mix/v1/market/contract-vip-level');
    }
    /** Get most recent trades (up to 500, 100 by default) */
    getRecentTrades(symbol, limit) {
        return this.get('/api/mix/v1/market/fills', { symbol, limit });
    }
    /** Get historic trades, up to 30 days at a time. Same-parameter responses are cached for 10 minutes. */
    getHistoricTrades(params) {
        return this.get('/api/mix/v1/market/fills-history', params);
    }
    /**
     * @deprecated use getRecentTrades() instead. This method will be removed soon.
     */
    getMarketTrades(symbol, limit) {
        return this.get('/api/mix/v1/market/fills', { symbol, limit });
    }
    /** Get Candle Data */
    getCandles(symbol, granularity, startTime, endTime, limit, kLineType) {
        return this.get('/api/mix/v1/market/candles', {
            symbol,
            granularity,
            startTime,
            endTime,
            kLineType,
            limit,
        });
    }
    /** Get symbol index price */
    getIndexPrice(symbol) {
        return this.get('/api/mix/v1/market/index', { symbol });
    }
    /** Get symbol next funding time */
    getNextFundingTime(symbol) {
        return this.get('/api/mix/v1/market/funding-time', { symbol });
    }
    /** Get Withdraw List */
    getHistoricFundingRate(symbol, pageSize, pageNo, nextPage) {
        return this.get('/api/mix/v1/market/history-fundRate', {
            symbol,
            nextPage,
            pageSize,
            pageNo,
        });
    }
    /** Get symbol current funding time */
    getCurrentFundingRate(symbol) {
        return this.get('/api/mix/v1/market/current-fundRate', { symbol });
    }
    /** Get symbol open interest */
    getOpenInterest(symbol) {
        return this.get('/api/mix/v1/market/open-interest', { symbol });
    }
    /** Get symbol mark price */
    getMarkPrice(symbol) {
        return this.get('/api/mix/v1/market/mark-price', { symbol });
    }
    /** Get symbol min/max leverage rules */
    getLeverageMinMax(symbol) {
        return this.get('/api/mix/v1/market/symbol-leverage', { symbol });
    }
    /** Get Position Tier */
    getPositionTier(symbol, productType) {
        return this.get('/api/mix/v1/market/queryPositionLever', {
            symbol,
            productType,
        });
    }
    /**
     *
     * Account Endpoints
     *
     */
    /** Get Single Account */
    getAccount(symbol, marginCoin) {
        return this.getPrivate('/api/mix/v1/account/account', {
            symbol,
            marginCoin,
        });
    }
    /** Get Account List */
    getAccounts(productType) {
        return this.getPrivate('/api/mix/v1/account/accounts', { productType });
    }
    /** Get Sub Account Contract Assets */
    getSubAccountContractAssets(productType) {
        return this.postPrivate('/api/mix/v1/account/sub-account-contract-assets', {
            productType,
        });
    }
    /**
     * This interface is only used to calculate the maximum number of positions that can be opened when the user does not hold a position by default.
     * The result does not represent the actual number of positions opened.
     */
    getOpenCount(symbol, marginCoin, openPrice, openAmount, leverage) {
        return this.postPrivate('/api/mix/v1/account/open-count', {
            symbol,
            marginCoin,
            openPrice,
            openAmount,
            leverage,
        });
    }
    /** Change Leverage */
    setLeverage(symbol, marginCoin, leverage, holdSide) {
        return this.postPrivate('/api/mix/v1/account/setLeverage', {
            symbol,
            marginCoin,
            leverage,
            holdSide,
        });
    }
    /** Change Margin */
    setMargin(symbol, marginCoin, amount, holdSide) {
        return this.postPrivate('/api/mix/v1/account/setMargin', {
            symbol,
            marginCoin,
            amount,
            holdSide,
        });
    }
    /** Change Margin Mode */
    setMarginMode(symbol, marginCoin, marginMode) {
        return this.postPrivate('/api/mix/v1/account/setMarginMode', {
            symbol,
            marginCoin,
            marginMode,
        });
    }
    /** Change Hold Mode */
    setHoldMode(productType, holdMode) {
        return this.postPrivate('/api/mix/v1/account/setPositionMode', {
            productType,
            holdMode,
        });
    }
    /** Get Symbol Position */
    getPosition(symbol, marginCoin) {
        return this.getPrivate('/api/mix/v1/position/singlePosition', {
            symbol,
            marginCoin,
        });
    }
    /** Get Symbol Position V2 */
    getPositionV2(symbol, marginCoin) {
        return this.getPrivate('/api/mix/v1/position/singlePosition-v2', {
            symbol,
            marginCoin,
        });
    }
    /** Get All Position */
    getPositions(productType, marginCoin) {
        return this.getPrivate('/api/mix/v1/position/allPosition', {
            productType,
            marginCoin,
        });
    }
    /** Get All Position V2 */
    getPositionsV2(productType, marginCoin) {
        return this.getPrivate('/api/mix/v1/position/allPosition-v2', {
            productType,
            marginCoin,
        });
    }
    /** Get All historic positions, only supports Query within 3 months  */
    getHistoryPositions(params) {
        return this.getPrivate('/api/mix/v1/position/history-position', params);
    }
    /** Get Account Bill */
    getAccountBill(params) {
        return this.getPrivate('/api/mix/v1/account/accountBill', params);
    }
    /** Get Business Account Bill */
    getBusinessBill(params) {
        return this.getPrivate('/api/mix/v1/account/accountBusinessBill', params);
    }
    /**
     *
     * Trade Endpoints
     *
     */
    /** Place Order */
    submitOrder(params) {
        return this.postPrivate('/api/mix/v1/order/placeOrder', params);
    }
    /** Batch Order */
    batchSubmitOrder(symbol, marginCoin, orders) {
        return this.postPrivate('/api/mix/v1/order/batch-orders', {
            symbol,
            marginCoin,
            orderDataList: orders,
        });
    }
    /** Cancel Order */
    cancelOrder(symbol, marginCoin, orderId, clientOid) {
        return this.postPrivate('/api/mix/v1/order/cancel-order', {
            symbol,
            marginCoin,
            orderId,
            clientOid,
        });
    }
    /** Batch Cancel Order */
    batchCancelOrder(symbol, marginCoin, orderIds) {
        return this.postPrivate('/api/mix/v1/order/cancel-batch-orders', {
            symbol,
            marginCoin,
            orderIds,
        });
    }
    /** Modify Order */
    modifyOrder(params) {
        return this.postPrivate('/api/mix/v1/order/modifyOrder', params);
    }
    /**
     * Cancel all futures orders for a symbol
     */
    cancelSymbolOrders(symbol, marginCoin) {
        return this.postPrivate('/api/mix/v1/order/cancel-symbol-orders', {
            symbol,
            marginCoin,
        });
    }
    /** Cancel All Order */
    cancelAllOrders(productType, marginCoin) {
        return this.postPrivate('/api/mix/v1/order/cancel-all-orders', {
            productType,
            marginCoin,
        });
    }
    /** Get Open Order */
    getOpenSymbolOrders(symbol) {
        return this.getPrivate('/api/mix/v1/order/current', { symbol });
    }
    /** Get All Open Order */
    getOpenOrders(productType, marginCoin) {
        return this.getPrivate('/api/mix/v1/order/marginCoinCurrent', {
            productType,
            marginCoin,
        });
    }
    /** Get History Orders */
    getOrderHistory(symbol, startTime, endTime, pageSize, lastEndId, isPre, clientOid) {
        return this.getPrivate('/api/mix/v1/order/history', {
            symbol,
            startTime,
            endTime,
            pageSize,
            lastEndId,
            isPre,
            clientOid,
        });
    }
    /** Get ProductType History Orders */
    getProductTypeOrderHistory(productType, startTime, endTime, pageSize, lastEndId, isPre, clientOid) {
        return this.getPrivate('/api/mix/v1/order/historyProductType', {
            productType,
            startTime,
            endTime,
            pageSize,
            lastEndId,
            isPre,
            clientOid,
        });
    }
    /** Get order details */
    getOrder(symbol, orderId, clientOid) {
        return this.getPrivate('/api/mix/v1/order/detail', {
            symbol,
            orderId,
            clientOid,
        });
    }
    /** Get transaction details / history (fills)  */
    getOrderFills(symbol, orderId, pagination) {
        return this.getPrivate('/api/mix/v1/order/fills', Object.assign({ symbol,
            orderId }, pagination));
    }
    /** Get ProductType Order fill detail */
    getProductTypeOrderFills(productType, pagination) {
        return this.getPrivate('/api/mix/v1/order/allFills', Object.assign({ productType: productType.toUpperCase() }, pagination));
    }
    /** Place Plan order */
    submitPlanOrder(params) {
        return this.postPrivate('/api/mix/v1/plan/placePlan', params);
    }
    /** Modify Plan Order */
    modifyPlanOrder(params) {
        return this.postPrivate('/api/mix/v1/plan/modifyPlan', params);
    }
    /** Modify Plan Order TPSL */
    modifyPlanOrderTPSL(params) {
        return this.postPrivate('/api/mix/v1/plan/modifyPlanPreset', params);
    }
    /** Place Stop order */
    submitStopOrder(params) {
        return this.postPrivate('/api/mix/v1/plan/placeTPSL', params);
    }
    /** Place Trailing Stop order */
    submitTrailingStopOrder(params) {
        return this.postPrivate('/api/mix/v1/plan/placeTrailStop', params);
    }
    /** Place Position TPSL */
    submitPositionTPSL(params) {
        return this.postPrivate('/api/mix/v1/plan/placePositionsTPSL', params);
    }
    /** Modify Stop Order */
    modifyStopOrder(params) {
        return this.postPrivate('/api/mix/v1/plan/modifyTPSLPlan', params);
    }
    /** Cancel Plan Order (TPSL) */
    cancelPlanOrderTPSL(params) {
        return this.postPrivate('/api/mix/v1/plan/cancelPlan', params);
    }
    /** Cancel Symbol Plan Order (TPSL) */
    cancelSymbolPlanOrders(symbol, planType) {
        return this.postPrivate('/api/mix/v1/plan/cancelSymbolPlan', {
            symbol,
            planType,
        });
    }
    /** Cancel All Trigger Order (TPSL) */
    cancelAllPlanOrders(productType, planType) {
        return this.postPrivate('/api/mix/v1/plan/cancelAllPlan', {
            productType,
            planType,
        });
    }
    /** Get Plan Order (TPSL) List */
    getPlanOrderTPSLs(symbol, isPlan, productType) {
        return this.getPrivate('/api/mix/v1/plan/currentPlan', {
            symbol,
            isPlan,
            productType,
        });
    }
    /** Get History Plan Orders (TPSL) */
    getHistoricPlanOrdersTPSL(params) {
        return this.getPrivate('/api/mix/v1/plan/historyPlan', params);
    }
    /**
     *
     * Copy Trade Endpoints
     *
     */
    /** Get Trader Open order */
    getCopyTraderOpenOrder(symbol, productType, pageSize, pageNo) {
        return this.getPrivate('/api/mix/v1/trace/currentTrack', {
            symbol,
            productType,
            pageSize,
            pageNo,
        });
    }
    /** Get Followers Open Order */
    getCopyFollowersOpenOrder(symbol, productType, pageSize, pageNo) {
        return this.getPrivate('/api/mix/v1/trace/followerOrder', {
            symbol,
            productType,
            pageSize,
            pageNo,
        });
    }
    /** Trader Close Position */
    closeCopyTraderPosition(symbol, trackingNo) {
        return this.postPrivate('/api/mix/v1/trace/closeTrackOrder', {
            symbol,
            trackingNo,
        });
    }
    /** Trader Modify TPSL */
    modifyCopyTraderTPSL(symbol, trackingNo, changes) {
        return this.postPrivate('/api/mix/v1/trace/modifyTPSL', Object.assign({ symbol,
            trackingNo }, changes));
    }
    /** Get Traders History Orders */
    getCopyTraderOrderHistory(startTime, endTime, pageSize, pageNo) {
        return this.getPrivate('/api/mix/v1/trace/historyTrack', {
            startTime,
            endTime,
            pageSize,
            pageNo,
        });
    }
    /** Get Trader Profit Summary */
    getCopyTraderProfitSummary() {
        return this.getPrivate('/api/mix/v1/trace/summary');
    }
    /** Get Trader History Profit Summary (according to settlement currency) */
    getCopyTraderHistoricProfitSummary() {
        return this.getPrivate('/api/mix/v1/trace/profitSettleTokenIdGroup');
    }
    /** Get Trader History Profit Summary (according to settlement currency and date) */
    getCopyTraderHistoricProfitSummaryByDate(marginCoin, dateMs, pageSize, pageNo) {
        return this.getPrivate('/api/mix/v1/trace/profitDateGroupList', {
            marginCoin,
            date: dateMs,
            pageSize,
            pageNo,
        });
    }
    /** Get Trader Histroy Profit Detail */
    getCopyTraderHistoricProfitDetail(marginCoin, dateMs, pageSize, pageNo) {
        return this.getPrivate('/api/mix/v1/trace/profitDateList', {
            marginCoin,
            date: dateMs,
            pageSize,
            pageNo,
        });
    }
    /** Get Trader Profits Details */
    getCopyTraderProfitDetails(pageSize, pageNo) {
        return this.getPrivate('/api/mix/v1/trace/waitProfitDateList', {
            pageSize,
            pageNo,
        });
    }
    /** Get CopyTrade Symbols */
    getCopyTraderSymbols() {
        return this.getPrivate('/api/mix/v1/trace/traderSymbols');
    }
    /** Trader Change CopyTrade symbol */
    setCopyTraderSymbols(symbol, operation) {
        return this.postPrivate('/api/mix/v1/trace/setUpCopySymbols', {
            symbol,
            operation,
        });
    }
}
exports.FuturesClient = FuturesClient;
//# sourceMappingURL=futures-client.js.map