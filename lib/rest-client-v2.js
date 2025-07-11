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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestClientV2 = void 0;
const util_1 = require("./util");
const BaseRestClient_1 = __importDefault(require("./util/BaseRestClient"));
/**
 * REST API client for all V2 endpoints
 */
class RestClientV2 extends BaseRestClient_1.default {
    getClientType() {
        return util_1.REST_CLIENT_TYPE_ENUM.v2;
    }
    /**
     *
     * Custom SDK functions
     *
     */
    /**
     * This method is used to get the latency and time sync between the client and the server.
     * This is not official API endpoint and is only used for internal testing purposes.
     * Use this method to check the latency and time sync between the client and the server.
     * Final values might vary slightly, but it should be within few ms difference.
     * If you have any suggestions or improvements to this measurement, please create an issue or pull request on GitHub.
     */
    fetchLatencySummary() {
        return __awaiter(this, void 0, void 0, function* () {
            const clientTimeReqStart = Date.now();
            const serverTime = yield this.getServerTime();
            const clientTimeReqEnd = Date.now();
            console.log('serverTime', serverTime);
            const serverTimeMs = Number(serverTime.data.serverTime);
            const roundTripTime = clientTimeReqEnd - clientTimeReqStart;
            const estimatedOneWayLatency = Math.floor(roundTripTime / 2);
            // Adjust server time by adding estimated one-way latency
            const adjustedServerTime = serverTimeMs + estimatedOneWayLatency;
            // Calculate time difference between adjusted server time and local time
            const timeDifference = adjustedServerTime - clientTimeReqEnd;
            const result = {
                localTime: clientTimeReqEnd,
                serverTime: serverTimeMs,
                roundTripTime,
                estimatedOneWayLatency,
                adjustedServerTime,
                timeDifference,
            };
            console.log('Time synchronization results:');
            console.log(result);
            console.log(`Your approximate latency to exchange server:
      One way: ${estimatedOneWayLatency}ms.
      Round trip: ${roundTripTime}ms.
      `);
            if (timeDifference > 500) {
                console.warn(`WARNING! Time difference between server and client clock is greater than 500ms. It is currently ${timeDifference}ms.
        Consider adjusting your system clock to avoid unwanted clock sync errors!
        Visit https://github.com/tiagosiebler/awesome-crypto-examples/wiki/Timestamp-for-this-request-is-outside-of-the-recvWindow for more information`);
            }
            else {
                console.log(`Time difference between server and client clock is within acceptable range of 500ms. It is currently ${timeDifference}ms.`);
            }
            return result;
        });
    }
    fetchServerTime() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.getServerTime();
            return Number(res.data);
        });
    }
    /**
     *
     * Bitget misc functions
     *
     */
    /**
     *
     *
     * Common
     *
     *
     */
    /**
     *
     * * Common | Notice
     *
     */
    getAnnouncements(params) {
        return this.get('/api/v2/public/annoucements', params);
    }
    /**
     *
     * * Common | Public
     *
     */
    getServerTime() {
        return this.get('/api/v2/public/time');
    }
    getTradeRate(params) {
        return this.getPrivate('/api/v2/common/trade-rate', params);
    }
    /**
     *
     * * Common | Tax
     *
     */
    getSpotTransactionRecords(params) {
        return this.getPrivate('/api/v2/tax/spot-record', params);
    }
    getFuturesTransactionRecords(params) {
        return this.getPrivate('/api/v2/tax/future-record', params);
    }
    getMarginTransactionRecords(params) {
        return this.getPrivate('/api/v2/tax/margin-record', params);
    }
    getP2PTransactionRecords(params) {
        return this.getPrivate('/api/v2/tax/p2p-record', params);
    }
    /**
     *
     * * Common | P2P
     *
     */
    getP2PMerchantList(params) {
        return this.getPrivate('/api/v2/p2p/merchantList', params);
    }
    getP2PMerchantInfo() {
        return this.getPrivate('/api/v2/p2p/merchantInfo');
    }
    getP2PMerchantOrders(params) {
        return this.getPrivate('/api/v2/p2p/orderList', params);
    }
    getP2PMerchantAdvertisementList(params) {
        return this.getPrivate('/api/v2/p2p/advList', params);
    }
    /**
     *
     * * Common | Trading insights
     *
     */
    getSpotWhaleNetFlowData(params) {
        return this.getPrivate('/api/v2/spot/market/whale-net-flow', params);
    }
    getFuturesActiveTakerBuySellVolumeData(params) {
        return this.get('/api/v2/mix/market/taker-buy-sell', params);
    }
    getFuturesActiveLongShortPositionData(params) {
        return this.get('/api/v2/mix/market/position-long-short', params);
    }
    getFuturesLongShortRatio(params) {
        return this.get('/api/v2/mix/market/long-short-ratio', params);
    }
    getMarginLoanGrowthRate(params) {
        return this.get('/api/v2/mix/market/loan-growth', params);
    }
    getIsolatedMarginBorrowingRatio(params) {
        return this.get('/api/v2/mix/market/isolated-borrow-rate', params);
    }
    getFuturesActiveBuySellVolumeData(params) {
        return this.get('/api/v2/mix/market/long-short', params);
    }
    getSpotFundFlow(params) {
        return this.get('/api/v2/spot/market/fund-flow', params);
    }
    getTradeDataSupportSymbols() {
        return this.get('/api/v2/spot/market/support-symbols');
    }
    getSpotFundNetFlowData(params) {
        return this.get('/api/v2/spot/market/fund-net-flow', params);
    }
    getFuturesActiveLongShortAccountData(params) {
        return this.get('/api/v2/mix/market/account-long-short', params);
    }
    /**
     *
     * * Common | Virtual Subaccount
     *
     */
    createVirtualSubaccount(params) {
        return this.postPrivate('/api/v2/user/create-virtual-subaccount', params);
    }
    modifyVirtualSubaccount(params) {
        return this.postPrivate('/api/v2/user/modify-virtual-subaccount', params);
    }
    batchCreateVirtualSubaccountAndAPIKey(params) {
        return this.postPrivate('/api/v2/user/batch-create-subaccount-and-apikey', params);
    }
    getVirtualSubaccounts(params) {
        return this.getPrivate('/api/v2/user/virtual-subaccount-list', params);
    }
    createVirtualSubaccountAPIKey(params) {
        return this.postPrivate('/api/v2/user/create-virtual-subaccount-apikey', params);
    }
    modifyVirtualSubaccountAPIKey(params) {
        return this.postPrivate('/api/v2/user/modify-virtual-subaccount-apikey', params);
    }
    getVirtualSubaccountAPIKeys(params) {
        return this.getPrivate('/api/v2/user/virtual-subaccount-apikey-list', params);
    }
    /**
     *
     * * Common | Assets
     *
     */
    getFundingAssets(params) {
        return this.getPrivate('/api/v2/account/funding-assets', params);
    }
    getBotAccount(params) {
        return this.getPrivate('/api/v2/account/bot-assets', params);
    }
    /** Get assets overview */
    getBalances() {
        return this.getPrivate('/api/v2/account/all-account-balance');
    }
    /**
     *
     * * Common | Convert
     *
     */
    getConvertCoins() {
        return this.getPrivate('/api/v2/convert/currencies');
    }
    getConvertQuotedPrice(params) {
        return this.getPrivate('/api/v2/convert/quoted-price', params);
    }
    convert(params) {
        return this.postPrivate('/api/v2/convert/trade', params);
    }
    getConvertHistory(params) {
        return this.getPrivate('/api/v2/convert/convert-record', params);
    }
    /**
     *
     * * Common | BGB Convert
     *
     */
    getConvertBGBCoins() {
        return this.getPrivate('/api/v2/convert/bgb-convert-coin-list');
    }
    convertBGB(params) {
        return this.postPrivate('/api/v2/convert/bgb-convert', params);
    }
    getConvertBGBHistory(params) {
        return this.getPrivate('/api/v2/convert/bgb-convert-records', params);
    }
    /**
     *
     *
     * Spot
     *
     *
     */
    /**
     *
     * * Spot | Market
     *
     */
    getSpotCoinInfo(params) {
        return this.getPrivate('/api/v2/spot/public/coins', params);
    }
    getSpotSymbolInfo(params) {
        return this.getPrivate('/api/v2/spot/public/symbols', params);
    }
    getSpotVIPFeeRate() {
        return this.getPrivate('/api/v2/spot/market/vip-fee-rate');
    }
    getSpotTicker(params) {
        return this.getPrivate('/api/v2/spot/market/tickers', params);
    }
    getSpotMergeDepth(params) {
        return this.getPrivate('/api/v2/spot/market/merge-depth', params);
    }
    getSpotOrderBookDepth(params) {
        return this.getPrivate('/api/v2/spot/market/orderbook', params);
    }
    getSpotCandles(params) {
        return this.getPrivate('/api/v2/spot/market/candles', params);
    }
    getSpotHistoricCandles(params) {
        return this.getPrivate('/api/v2/spot/market/history-candles', params);
    }
    getSpotRecentTrades(params) {
        return this.getPrivate('/api/v2/spot/market/fills', params);
    }
    getSpotHistoricTrades(params) {
        return this.getPrivate('/api/v2/spot/market/fills-history', params);
    }
    /**
     *
     * * Spot | Trade
     *
     */
    spotSubmitOrder(params) {
        return this.postPrivate('/api/v2/spot/trade/place-order', params);
    }
    spotCancelandSubmitOrder(params) {
        return this.postPrivate('/api/v2/spot/trade/cancel-replace-order', params);
    }
    spotBatchCancelandSubmitOrder(params) {
        return this.postPrivate('/api/v2/spot/trade/batch-cancel-replace-order', params);
    }
    spotCancelOrder(params) {
        return this.postPrivate('/api/v2/spot/trade/cancel-order', params);
    }
    spotBatchSubmitOrders(params) {
        return this.postPrivate('/api/v2/spot/trade/batch-orders', params);
    }
    spotBatchCancelOrders(params) {
        return this.postPrivate('/api/v2/spot/trade/batch-cancel-order', params);
    }
    spotCancelSymbolOrder(params) {
        return this.postPrivate('/api/v2/spot/trade/cancel-symbol-order', params);
    }
    getSpotOrder(params) {
        return this.getPrivate('/api/v2/spot/trade/orderInfo', params);
    }
    getSpotOpenOrders(params) {
        return this.getPrivate('/api/v2/spot/trade/unfilled-orders', params);
    }
    getSpotHistoricOrders(params) {
        return this.getPrivate('/api/v2/spot/trade/history-orders', params);
    }
    getSpotFills(params) {
        return this.getPrivate('/api/v2/spot/trade/fills', params);
    }
    /**
     *
     * * Spot | Trigger Orders
     *
     */
    spotSubmitPlanOrder(params) {
        return this.postPrivate('/api/v2/spot/trade/place-plan-order', params);
    }
    spotModifyPlanOrder(params) {
        return this.postPrivate('/api/v2/spot/trade/modify-plan-order', params);
    }
    spotCancelPlanOrder(params) {
        return this.postPrivate('/api/v2/spot/trade/cancel-plan-order', params);
    }
    getSpotCurrentPlanOrders(params) {
        return this.getPrivate('/api/v2/spot/trade/current-plan-order', params);
    }
    getSpotPlanSubOrder(params) {
        return this.getPrivate('/api/v2/spot/trade/plan-sub-order', params);
    }
    getSpotHistoricPlanOrders(params) {
        return this.getPrivate('/api/v2/spot/trade/history-plan-order', params);
    }
    spotCancelPlanOrders(params) {
        return this.postPrivate('/api/v2/spot/trade/batch-cancel-plan-order', params);
    }
    /**
     *
     * * Spot | Account
     *
     */
    getSpotAccount() {
        return this.getPrivate('/api/v2/spot/account/info');
    }
    getSpotAccountAssets(params) {
        return this.getPrivate('/api/v2/spot/account/assets', params);
    }
    getSpotSubAccountAssets() {
        return this.getPrivate('/api/v2/spot/account/subaccount-assets');
    }
    spotModifyDepositAccount(params) {
        return this.postPrivate('/api/v2/spot/wallet/modify-deposit-account', params);
    }
    getSpotAccountBills(params) {
        return this.getPrivate('/api/v2/spot/account/bills', params);
    }
    spotTransfer(params) {
        return this.postPrivate('/api/v2/spot/wallet/transfer', params);
    }
    getSpotTransferableCoins(params) {
        return this.getPrivate('/api/v2/spot/wallet/transfer-coin-info', params);
    }
    spotSubTransfer(params) {
        return this.postPrivate('/api/v2/spot/wallet/subaccount-transfer', params);
    }
    spotWithdraw(params) {
        return this.postPrivate('/api/v2/spot/wallet/withdrawal', params);
    }
    getSpotMainSubTransferRecord(params) {
        return this.getPrivate('/api/v2/spot/account/sub-main-trans-record', params);
    }
    getSpotTransferHistory(params) {
        return this.getPrivate('/api/v2/spot/account/transferRecords', params);
    }
    spotSwitchBGBDeduct(params) {
        return this.postPrivate('/api/v2/spot/account/switch-deduct', params);
    }
    getSpotDepositAddress(params) {
        return this.getPrivate('/api/v2/spot/wallet/deposit-address', params);
    }
    getSpotSubDepositAddress(params) {
        return this.getPrivate('/api/v2/spot/wallet/subaccount-deposit-address', params);
    }
    getSpotBGBDeductInfo() {
        return this.getPrivate('/api/v2/spot/account/deduct-info');
    }
    spotCancelWithdrawal(params) {
        return this.postPrivate('/api/v2/spot/wallet/cancel-withdrawal', params);
    }
    getSubAccountDepositRecords(params) {
        return this.getPrivate('/api/v2/spot/wallet/subaccount-deposit-records', params);
    }
    getSpotWithdrawalHistory(params) {
        return this.getPrivate('/api/v2/spot/wallet/withdrawal-records', params);
    }
    getSpotDepositHistory(params) {
        return this.getPrivate('/api/v2/spot/wallet/deposit-records', params);
    }
    /**
     *
     *
     * Futures
     *
     *
     */
    /**
     *
     * * Futures | Market
     *
     */
    getFuturesVIPFeeRate() {
        return this.get('/api/v2/mix/market/vip-fee-rate');
    }
    getFuturesInterestRateHistory(params) {
        return this.get('/api/v2/mix/market/union-interest-rate-history', params);
    }
    getFuturesInterestExchangeRate() {
        return this.get('/api/v2/mix/market/exchange-rate');
    }
    getFuturesDiscountRate() {
        return this.get('/api/v2/mix/market/discount-rate');
    }
    getFuturesMergeDepth(params) {
        return this.get('/api/v2/mix/market/merge-depth', params);
    }
    getFuturesTicker(params) {
        return this.get('/api/v2/mix/market/ticker', params);
    }
    getFuturesAllTickers(params) {
        return this.get('/api/v2/mix/market/tickers', params);
    }
    getFuturesRecentTrades(params) {
        return this.get('/api/v2/mix/market/fills', params);
    }
    getFuturesHistoricTrades(params) {
        return this.get('/api/v2/mix/market/fills-history', params);
    }
    getFuturesCandles(params) {
        return this.get('/api/v2/mix/market/candles', params);
    }
    getFuturesHistoricCandles(params) {
        return this.get('/api/v2/mix/market/history-candles', params);
    }
    getFuturesHistoricIndexPriceCandles(params) {
        return this.get('/api/v2/mix/market/history-index-candles', params);
    }
    getFuturesHistoricMarkPriceCandles(params) {
        return this.get('/api/v2/mix/market/history-mark-candles', params);
    }
    getFuturesOpenInterest(params) {
        return this.get('/api/v2/mix/market/open-interest', params);
    }
    getFuturesNextFundingTime(params) {
        return this.get('/api/v2/mix/market/funding-time', params);
    }
    getFuturesSymbolPrice(params) {
        return this.get('/api/v2/mix/market/symbol-price', params);
    }
    getFuturesHistoricFundingRates(params) {
        return this.get('/api/v2/mix/market/history-fund-rate', params);
    }
    getFuturesCurrentFundingRate(params) {
        return this.get('/api/v2/mix/market/current-fund-rate', params);
    }
    getFuturesContractConfig(params) {
        return this.get('/api/v2/mix/market/contracts', params);
    }
    /**
     *
     * * Futures | Account
     *
     */
    getFuturesAccountAsset(params) {
        return this.getPrivate('/api/v2/mix/account/account', params);
    }
    getFuturesAccountAssets(params) {
        return this.getPrivate('/api/v2/mix/account/accounts', params);
    }
    getFuturesSubAccountAssets(params) {
        return this.getPrivate('/api/v2/mix/account/sub-account-assets', params);
    }
    getFuturesInterestHistory(params) {
        return this.getPrivate('/api/v2/mix/account/interest-history', params);
    }
    getFuturesOpenCount(params) {
        return this.getPrivate('/api/v2/mix/account/open-count', params);
    }
    setFuturesPositionAutoMargin(params) {
        return this.postPrivate('/api/v2/mix/account/set-auto-margin', params);
    }
    setFuturesLeverage(params) {
        return this.postPrivate('/api/v2/mix/account/set-leverage', params);
    }
    setFuturesPositionMargin(params) {
        return this.postPrivate('/api/v2/mix/account/set-margin', params);
    }
    setFuturesAssetMode(params) {
        return this.postPrivate('/api/v2/mix/account/set-asset-mode', params);
    }
    setFuturesMarginMode(params) {
        return this.postPrivate('/api/v2/mix/account/set-margin-mode', params);
    }
    setFuturesPositionMode(params) {
        return this.postPrivate('/api/v2/mix/account/set-position-mode', params);
    }
    getFuturesAccountBills(params) {
        return this.getPrivate('/api/v2/mix/account/bill', params);
    }
    /**
     *
     * * Futures | Position
     *
     */
    getFuturesPositionTier(params) {
        return this.get('/api/v2/mix/market/query-position-lever', params);
    }
    getFuturesPosition(params) {
        return this.getPrivate('/api/v2/mix/position/single-position', params);
    }
    getFuturesPositions(params) {
        return this.getPrivate('/api/v2/mix/position/all-position', params);
    }
    getFuturesHistoricPositions(params) {
        return this.getPrivate('/api/v2/mix/position/history-position', params);
    }
    /**
     *
     * * Futures | Trade
     *
     */
    futuresSubmitOrder(params) {
        return this.postPrivate('/api/v2/mix/order/place-order', params);
    }
    futuresSubmitReversal(params) {
        return this.postPrivate('/api/v2/mix/order/click-backhand', params);
    }
    futuresBatchSubmitOrders(params) {
        return this.postPrivate('/api/v2/mix/order/batch-place-order', params);
    }
    futuresModifyOrder(params) {
        return this.postPrivate('/api/v2/mix/order/modify-order', params);
    }
    futuresCancelOrder(params) {
        return this.postPrivate('/api/v2/mix/order/cancel-order', params);
    }
    futuresBatchCancelOrders(params) {
        return this.postPrivate('/api/v2/mix/order/batch-cancel-orders', params);
    }
    futuresFlashClosePositions(params) {
        return this.postPrivate('/api/v2/mix/order/close-positions', params);
    }
    getFuturesOrder(params) {
        return this.getPrivate('/api/v2/mix/order/detail', params);
    }
    getFuturesFills(params) {
        return this.getPrivate('/api/v2/mix/order/fills', params);
    }
    getFuturesHistoricOrderFills(params) {
        return this.getPrivate('/api/v2/mix/order/fill-history', params);
    }
    getFuturesOpenOrders(params) {
        return this.getPrivate('/api/v2/mix/order/orders-pending', params);
    }
    getFuturesHistoricOrders(params) {
        return this.getPrivate('/api/v2/mix/order/orders-history', params);
    }
    futuresCancelAllOrders(params) {
        return this.postPrivate('/api/v2/mix/order/cancel-all-orders', params);
    }
    /**
     *
     * * Futures | Trigger Orders
     *
     */
    getFuturesTriggerSubOrder(params) {
        return this.getPrivate('/api/v2/mix/order/plan-sub-order', params);
    }
    futuresSubmitTPSLOrder(params) {
        return this.postPrivate('/api/v2/mix/order/place-tpsl-order', params);
    }
    futuresSubmitPlanOrder(params) {
        return this.postPrivate('/api/v2/mix/order/place-plan-order', params);
    }
    futuresModifyTPSLPOrder(params) {
        return this.postPrivate('/api/v2/mix/order/modify-tpsl-order', params);
    }
    futuresModifyPlanOrder(params) {
        return this.postPrivate('/api/v2/mix/order/modify-plan-order', params);
    }
    getFuturesPlanOrders(params) {
        return this.getPrivate('/api/v2/mix/order/orders-plan-pending', params);
    }
    futuresCancelPlanOrder(params) {
        return this.postPrivate('/api/v2/mix/order/cancel-plan-order', params);
    }
    getFuturesHistoricPlanOrders(params) {
        return this.getPrivate('/api/v2/mix/order/orders-plan-history', params);
    }
    /**
     *
     *
     * Broker
     *
     *
     */
    /**
     *
     * * Broker | Subaccount
     *
     */
    modifySubaccountEmail(params) {
        return this.postPrivate('/api/v2/broker/account/modify-subaccount-email', params);
    }
    getBrokerInfo() {
        return this.getPrivate('/api/v2/broker/account/info');
    }
    createSubaccount(params) {
        return this.postPrivate('/api/v2/broker/account/create-subaccount', params);
    }
    getSubaccounts(params) {
        return this.getPrivate('/api/v2/broker/account/subaccount-list', params);
    }
    modifySubaccount(params) {
        return this.postPrivate('/api/v2/broker/account/modify-subaccount', params);
    }
    getSubaccountEmail(params) {
        return this.getPrivate('/api/v2/broker/account/subaccount-email', params);
    }
    getSubaccountSpotAssets(params) {
        return this.getPrivate('/api/v2/broker/account/subaccount-spot-assets', params);
    }
    getSubaccountFuturesAssets(params) {
        return this.getPrivate('/api/v2/broker/account/subaccount-future-assets', params);
    }
    createSubaccountDepositAddress(params) {
        return this.postPrivate('/api/v2/broker/account/subaccount-address', params);
    }
    subaccountWithdrawal(params) {
        return this.postPrivate('/api/v2/broker/account/subaccount-withdrawal', params);
    }
    subaccountSetAutoTransfer(params) {
        return this.postPrivate('/api/v2/broker/account/set-subaccount-autotransfer', params);
    }
    subaccountDepositRecords(params) {
        return this.postPrivate('/api/v2/broker/subaccount-deposit', params);
    }
    subaccountWithdrawalRecords(params) {
        return this.postPrivate('/api/v2/broker/subaccount-withdrawal', params);
    }
    /**
     *
     *  Broker | Api Key
     *
     */
    createSubaccountApiKey(params) {
        return this.postPrivate('/api/v2/broker/manage/create-subaccount-apikey', params);
    }
    getSubaccountApiKey(params) {
        return this.getPrivate('/api/v2/broker/manage/subaccount-apikey-list', params);
    }
    modifySubaccountApiKey(params) {
        return this.postPrivate('/api/v2/broker/manage/modify-subaccount-apikey', params);
    }
    /**
     *
     *
     * Margin
     *
     *
     */
    /**
     *
     * * Margin | Common
     *
     */
    getMarginCurrencies() {
        return this.get('/api/v2/margin/currencies');
    }
    /**
     *
     * * Margin | Cross/Isolated | Order Record
     *
     */
    getMarginBorrowHistory(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.getPrivate(`/api/v2/margin/${marginType}/borrow-history`, params);
    }
    getMarginRepayHistory(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.getPrivate(`/api/v2/margin/${marginType}/repay-history`, params);
    }
    getMarginInterestHistory(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.getPrivate(`/api/v2/margin/${marginType}/interest-history`, params);
    }
    getMarginLiquidationHistory(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.getPrivate(`/api/v2/margin/${marginType}/liquidation-history`, params);
    }
    getMarginFinancialHistory(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.getPrivate(`/api/v2/margin/${marginType}/financial-records`, params);
    }
    /**
     *
     * * Margin | Cross/Isolated | Account
     *
     */
    getMarginAccountAssets(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.getPrivate(`/api/v2/margin/${marginType}/account/assets`, params);
    }
    marginBorrow(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.postPrivate(`/api/v2/margin/${marginType}/account/borrow`, params);
    }
    marginRepay(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.postPrivate(`/api/v2/margin/${marginType}/account/repay`, params);
    }
    getMarginRiskRate(marginType) {
        (0, util_1.assertMarginType)(marginType);
        return this.getPrivate(`/api/v2/margin/${marginType}/account/risk-rate`);
    }
    getMarginMaxBorrowable(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.getPrivate('/api/v2/margin/${marginType}/account/max-borrowable-amount', params);
    }
    getMarginMaxTransferable(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.getPrivate('/api/v2/margin/${marginType}/account/max-transfer-out-amount', params);
    }
    getMarginInterestRateAndMaxBorrowable(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.getPrivate('/api/v2/margin/${marginType}/interest-rate-and-limit', params);
    }
    getMarginTierConfiguration(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.getPrivate(`/api/v2/margin/${marginType}/tier-data`, params);
    }
    marginFlashRepay(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.postPrivate('/api/v2/margin/${marginType}/account/flash-repay', params);
    }
    getMarginFlashRepayResult(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.getPrivate('/api/v2/margin/${marginType}/account/query-flash-repay-status', params);
    }
    /**
     *
     * * Margin | Cross/Isolated | Trade
     *
     */
    marginSubmitOrder(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.postPrivate(`/api/v2/margin/${marginType}/place-order`, params);
    }
    marginBatchSubmitOrders(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.postPrivate(`/api/v2/margin/${marginType}/batch-place-order`, params);
    }
    marginCancelOrder(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.postPrivate(`/api/v2/margin/${marginType}/cancel-order`, params);
    }
    marginBatchCancelOrders(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.postPrivate('/api/v2/margin/${marginType}/batch-cancel-order', params);
    }
    getMarginOpenOrders(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.getPrivate(`/api/v2/margin/${marginType}/open-orders`, params);
    }
    getMarginHistoricOrders(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.getPrivate(`/api/v2/margin/${marginType}/history-orders`, params);
    }
    getMarginHistoricOrderFills(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.getPrivate(`/api/v2/margin/${marginType}/fills`, params);
    }
    getMarginLiquidationOrders(marginType, params) {
        (0, util_1.assertMarginType)(marginType);
        return this.getPrivate(`/api/v2/margin/${marginType}/liquidation-order`, params);
    }
    /**
     *
     *
     * Copy Trading
     *
     *
     */
    /**
     *
     *
     * Copy Trading | Future copy trading | Trader Api
     *
     *
     */
    getFuturesTraderCurrentOrder(params) {
        return this.getPrivate('/api/v2/copy/mix-trader/order-current-track', params);
    }
    getFuturesTraderHistoryOrders(params) {
        return this.getPrivate('/api/v2/copy/mix-trader/order-history-track', params);
    }
    modifyFuturesTraderOrderTPSL(params) {
        return this.postPrivate('/api/v2/copy/mix-trader/order-modify-tpsl', params);
    }
    getFuturesTraderOrder() {
        return this.getPrivate('/api/v2/copy/mix-trader/order-total-detail');
    }
    getFuturesTraderProfitHistory() {
        return this.getPrivate('/api/v2/copy/mix-trader/profit-history-summarys');
    }
    getFuturesTraderProfitShareHistory(params) {
        return this.getPrivate('/api/v2/copy/mix-trader/profit-history-details', params);
    }
    closeFuturesTraderOrder(params) {
        return this.postPrivate('/api/v2/copy/mix-trader/order-close-positions', params);
    }
    getFuturesTraderProfitShare(params) {
        return this.getPrivate('/api/v2/copy/mix-trader/profit-details', params);
    }
    getFuturesTraderProfitShareGroup(params) {
        return this.getPrivate('/api/v2/copy/mix-trader/profits-group-coin-date', params);
    }
    getFuturesTraderSymbolSettings(params) {
        return this.getPrivate('/api/v2/copy/mix-trader/config-query-symbols', params);
    }
    updateFuturesTraderSymbolSettings(params) {
        return this.postPrivate('/api/v2/copy/mix-trader/config-setting-symbols', params);
    }
    updateFuturesTraderGlobalSettings(params) {
        return this.postPrivate('/api/v2/copy/mix-trader/config-settings-base', params);
    }
    getFuturesTraderFollowers(params) {
        return this.getPrivate('/api/v2/copy/mix-trader/config-query-followers', params);
    }
    removeFuturesTraderFollower(params) {
        return this.postPrivate('/api/v2/copy/mix-trader/config-remove-follower', params);
    }
    /**
     *
     *
     * Copy Trading | Future copy trading | Follower Api
     *
     *
     */
    getFuturesFollowerCurrentOrders(params) {
        return this.getPrivate('/api/v2/copy/mix-follower/query-current-orders', params);
    }
    getFuturesFollowerHistoryOrders(params) {
        return this.getPrivate('/api/v2/copy/mix-follower/query-history-orders', params);
    }
    updateFuturesFollowerTPSL(params) {
        return this.postPrivate('/api/v2/copy/mix-follower/setting-tpsl', params);
    }
    updateFuturesFollowerSettings(params) {
        return this.postPrivate('/api/v2/copy/mix-follower/settings', params);
    }
    getFuturesFollowerSettings(params) {
        return this.getPrivate('/api/v2/copy/mix-follower/query-settings', params);
    }
    closeFuturesFollowerPositions(params) {
        return this.postPrivate('/api/v2/copy/mix-follower/close-positions', params);
    }
    getFuturesFollowerTraders(params) {
        return this.getPrivate('/api/v2/copy/mix-follower/query-traders', params);
    }
    getFuturesFollowerFollowLimit(params) {
        return this.getPrivate('/api/v2/copy/mix-follower/query-quantity-limit', params);
    }
    unfollowFuturesTrader(params) {
        return this.postPrivate('/api/v2/copy/mix-follower/cancel-trader', params);
    }
    /**
     *
     *
     * Copy Trading | Future copy trading | Broker api
     *
     *
     */
    getBrokerTraders(params) {
        return this.getPrivate('/api/v2/copy/mix-broker/query-traders', params);
    }
    getBrokerTradersHistoricalOrders(params) {
        return this.getPrivate('/api/v2/copy/mix-broker/query-history-traces', params);
    }
    getBrokerTradersPendingOrders(params) {
        return this.getPrivate('/api/v2/copy/mix-broker/query-current-traces', params);
    }
    /**
     *
     *
     * Copy Trading | Spot copy trading | Trader api
     *
     *
     */
    getSpotTraderProfit() {
        return this.getPrivate('/api/v2/copy/spot-trader/profit-summarys');
    }
    getSpotTraderHistoryProfit(params) {
        return this.getPrivate('/api/v2/copy/spot-trader/profit-history-details', params);
    }
    getSpotTraderUnrealizedProfit(params) {
        return this.getPrivate('/api/v2/copy/spot-trader/profit-details', params);
    }
    getSpotTraderOrder() {
        return this.getPrivate('/api/v2/copy/spot-trader/order-total-detail');
    }
    modifySpotTraderOrderTPSL(params) {
        return this.postPrivate('/api/v2/copy/spot-trader/order-modify-tpsl', params);
    }
    getSpotTraderHistoryOrders(params) {
        return this.getPrivate('/api/v2/copy/spot-trader/order-history-track', params);
    }
    getSpotTraderCurrentOrders(params) {
        return this.getPrivate('/api/v2/copy/spot-trader/order-current-track', params);
    }
    sellSpotTrader(params) {
        return this.postPrivate('/api/v2/copy/spot-trader/order-close-tracking', params);
    }
    getSpotTraderSymbolSettings(params) {
        return this.postPrivate('/api/v2/copy/spot-trader/config-setting-symbols', params);
    }
    removeSpotTraderFollowers(params) {
        return this.postPrivate('/api/v2/copy/spot-trader/config-remove-follower', params);
    }
    getSpotTraderConfiguration() {
        return this.getPrivate('/api/v2/copy/spot-trader/config-query-settings');
    }
    getSpotTraderFollowers(params) {
        return this.getPrivate('/api/v2/copy/spot-trader/config-query-followers', params);
    }
    /**
     *
     *
     * Copy Trading | Spot copy trading | Follower api
     *
     *
     */
    cancelSpotFollowerOrder(params) {
        return this.postPrivate('/api/v2/copy/spot-follower/stop-order', params);
    }
    updateSpotFollowerSettings(params) {
        return this.postPrivate('/api/v2/copy/spot-follower/settings', params);
    }
    updateSpotFollowerTPSL(params) {
        return this.postPrivate('/api/v2/copy/spot-follower/setting-tpsl', params);
    }
    getSpotFollowerTraders(params) {
        return this.getPrivate('/api/v2/copy/spot-follower/query-traders', params);
    }
    getSpotFollowerCurrentTraderSymbols(params) {
        return this.getPrivate('/api/v2/copy/spot-follower/query-trader-symbols', params);
    }
    getSpotFollowerSettings(params) {
        return this.getPrivate('/api/v2/copy/spot-follower/query-settings', params);
    }
    getSpotFollowerHistoryOrders(params) {
        return this.getPrivate('/api/v2/copy/spot-follower/query-history-orders', params);
    }
    getSpotFollowerOpenOrders(params) {
        return this.getPrivate('/api/v2/copy/spot-follower/query-current-orders', params);
    }
    sellSpotFollower(params) {
        return this.postPrivate('/api/v2/copy/spot-follower/order-close-tracking', params);
    }
    unfollowSpotTrader(params) {
        return this.postPrivate('/api/v2/copy/spot-follower/cancel-trader', params);
    }
    /**
     *
     *
     * Earn | Savings
     *
     *
     */
    getEarnSavingsProducts(params) {
        return this.getPrivate('/api/v2/earn/savings/product', params);
    }
    getEarnSavingsAccount() {
        return this.getPrivate('/api/v2/earn/savings/account');
    }
    getEarnSavingsAssets(params) {
        return this.getPrivate('/api/v2/earn/savings/assets', params);
    }
    getEarnSavingsRecords(params) {
        return this.getPrivate('/api/v2/earn/savings/records', params);
    }
    getEarnSavingsSubscription(params) {
        return this.getPrivate('/api/v2/earn/savings/subscribe-info', params);
    }
    earnSubscribeSavings(params) {
        return this.postPrivate('/api/v2/earn/savings/subscribe', params);
    }
    getEarnSavingsSubscriptionResult(params) {
        return this.getPrivate('/api/v2/earn/savings/subscribe-result', params);
    }
    earnRedeemSavings(params) {
        return this.postPrivate('/api/v2/earn/savings/redeem', params);
    }
    getEarnSavingsRedemptionResult(params) {
        return this.getPrivate('/api/v2/earn/savings/redeem-result', params);
    }
    /**
     *
     *
     * Earn | Earn Account
     *
     *
     */
    getEarnAccount(params) {
        return this.getPrivate('/api/v2/earn/account/assets', params);
    }
    /**
     *
     *
     * Earn | Shark Fin
     *
     *
     */
    getSharkfinProducts(params) {
        return this.getPrivate('/api/v2/earn/sharkfin/product', params);
    }
    getSharkfinAccount() {
        return this.getPrivate('/api/v2/earn/sharkfin/account');
    }
    getSharkfinAssets(params) {
        return this.getPrivate('/api/v2/earn/sharkfin/assets', params);
    }
    getSharkfinRecords(params) {
        return this.getPrivate('/api/v2/earn/sharkfin/records', params);
    }
    getSharkfinSubscription(params) {
        return this.getPrivate('/api/v2/earn/sharkfin/subscribe-info', params);
    }
    subscribeSharkfin(params) {
        return this.postPrivate('/api/v2/earn/sharkfin/subscribe', params);
    }
    getSharkfinSubscriptionResult(params) {
        return this.getPrivate('/api/v2/earn/sharkfin/subscribe-result', params);
    }
    /**
     *
     *
     * Earn | Loan
     *
     *
     */
    getLoanCurrencies(params) {
        return this.get('/api/v2/earn/loan/public/coinInfos', params);
    }
    getLoanEstInterestAndBorrowable(params) {
        return this.get('/api/v2/earn/loan/public/hour-interest', params);
    }
    borrowLoan(params) {
        return this.postPrivate('/api/v2/earn/loan/borrow', params);
    }
    getOngoingLoanOrders(params) {
        return this.getPrivate('/api/v2/earn/loan/ongoing-orders', params);
    }
    repayLoan(params) {
        return this.postPrivate('/api/v2/earn/loan/repay', params);
    }
    getRepayHistory(params) {
        return this.getPrivate('/api/v2/earn/loan/repay-history', params);
    }
    updateLoanPledgeRate(params) {
        return this.postPrivate('/api/v2/earn/loan/revise-pledge', params);
    }
    getLoanPledgeRateHistory(params) {
        return this.getPrivate('/api/v2/earn/loan/revise-history', params);
    }
    getLoanHistory(params) {
        return this.getPrivate('/api/v2/earn/loan/borrow-history', params);
    }
    getLoanDebts() {
        return this.getPrivate('/api/v2/earn/loan/debts');
    }
    getLoanLiquidationRecords(params) {
        return this.getPrivate('/api/v2/earn/loan/reduces', params);
    }
}
exports.RestClientV2 = RestClientV2;
//# sourceMappingURL=rest-client-v2.js.map