import { AnnouncementV2, APIResponse, BGBConvertCoinV2, BGBConvertHistoryV2, BorrowLoanRequestV2, BotAssetV2, BrokerSubaccountFutureAssetV2, BrokerSubaccountSpotAssetV2, BrokerSubaccountV2, BrokerSubaccountWithdrawalV2, CancelAndSubmitSpotOrderResponseV2, CloseFuturesFollowerPositionsRequestV2, ConvertBGBResponseV2, ConvertCurrencyV2, ConvertQuotedPriceV2, ConvertQuoteRequestV2, ConvertRecordV2, ConvertRequestV2, ConvertTradeResponseV2, CopyTradingProductTypeV2, CreateSubAccountApiKeyRequestV2, CreateSubaccountApiKeyResponseV2, CreateSubaccountDepositAddressV2, CreateSubaccountResponseV2, CreateVirtualSubAccountAndApiKeyV2, CreateVirtualSubAccountApiKeyV2, CreateVirtualSubAccountV2, CreateVirtualSubApiKeyRequestV2, CreateVirtualSubRequestV2, CrossInterestRateAndLimitResponseV2, CrossMaxBorrowableResponseV2, CrossMaxTransferableResponseV2, CrossTierConfigurationResponseV2, CTFuturesFollowerCurrentOrdersV2, CTFuturesFollowerHistoryOrdersV2, CTFuturesFollowerMyTradersV2, CTFuturesFollowerSettingsV2, CTFuturesTraderCurrentOrdersV2, CTFuturesTraderHistoryOrderV2, CTFuturesTraderHistoryProfitSummaryV2, CTFuturesTraderMyFollowersV2, CTFuturesTraderProfitShareHistoryV2, CTFuturesTraderSymbolSettingsV2, CTFuturesTraderTotalOrderSummaryV2, CTSpotFollowerCurrentOrdersV2, CTSpotFollowerFollowConfigurationV2, CTSpotFollowerHistoryOrdersV2, CTSpotFollowerMyTradersV2, CTSpotTraderCurrentTrackingOrdersV2, CTSpotTraderFollowerListV2, CTSpotTraderHistoryOrdersV2, CTSpotTraderHistoryProfitSharingV2, CTSpotTraderProfitSummaryV2, CTSpotTraderTotalOrderDetailV2, CTSpotTraderUnrealizedProfitV2, EarnLoanCurrenciesV2, EarnLoanDebtsV2, EarnLoanHistoryV2, EarnLoanLiquidationRecordsV2, EarnLoanOrdersV2, EarnLoanPledgeRateHistoryV2, EarnLoanRepayHistoryV2, EarnLoanRepayResponseV2, EarnSavingsAccountV2, EarnSavingsAssetsV2, EarnSavingsProductsV2, EarnSavingsRecordsV2, EarnSavingsSubscriptionDetailV2, EarnSharkfinAccountV2, EarnSharkfinAssetsV2, EarnSharkfinProductsV2, EarnSharkfinRecordsV2, EarnSharkfinSubscriptionDetailV2, FundingAssetV2, FuturesAccountBillRequestV2, FuturesAccountBillV2, FuturesAccountsV2, FuturesAccountV2, FuturesActiveBuySellVolumeV2, FuturesActiveLongShortAccountV2, FuturesActiveLongShortPositionV2, FuturesBatchCancelOrderRequestV2, FuturesBatchOrderRequestV2, FuturesBatchOrderResponseV2, FuturesCancelAllOrdersRequestV2, FuturesCancelAllOrdersV2, FuturesCancelOrderRequestV2, FuturesCancelPlanOrderRequestV2, FuturesCancelPlanOrderV2, FuturesCandlesRequestV2, FuturesCandlestickV2, FuturesClosePositionResponseV2, FuturesContractConfigV2, FuturesDiscountRatesV2, FuturesFillV2, FuturesFlashClosePositionsRequestV2, FuturesFundingTimeV2, FuturesGetHistoricalFillsRequestV2, FuturesGetHistoryOrdersRequestV2, FuturesGetHistoryPlanOrdersRequestV2, FuturesGetOpenOrdersRequestV2, FuturesGetOrderFillsRequestV2, FuturesGetOrderRequestV2, FuturesGetPlanOrdersRequestV2, FuturesHistoricalFundingRateV2, FuturesHistoricalPositionsRequestV2, FuturesHistoricTradesRequestV2, FuturesHistoryInterestRateV2, FuturesHistoryOrderV2, FuturesHistoryPlanOrderV2, FuturesHistoryPositionV2, FuturesInterestExchangeRateV2, FuturesInterestHistoryRequestV2, FuturesInterestHistoryV2, FuturesLongShortRatioV2, FuturesMergeDepthRequestV2, FuturesMergeDepthV2, FuturesModifyOrderRequestV2, FuturesModifyPlanOrderRequestV2, FuturesModifyTPSLOrderRequestV2, FuturesOpenCountRequestV2, FuturesOpenInterestV2, FuturesOpenOrderV2, FuturesOrderDetailV2, FuturesOrderFillV2, FuturesPendingPlanOrderV2, FuturesPlaceOrderRequestV2, FuturesPlanOrderRequestV2, FuturesPositionTierV2, FuturesPositionV2, FuturesProductTypeV2, FuturesRecentTradesRequestV2, FuturesReversalOrderRequestV2, FuturesSetAutoMarginRequestV2, FuturesSetLeverageRequestV2, FuturesSetMarginModeRequestV2, FuturesSetPositionMarginRequestV2, FuturesSingleAccountRequestV2, FuturesSubAccountAssetV2, FuturesSymbolPriceV2, FuturesTickerV2, FuturesTPSLOrderRequestV2, FuturesTraderSymbolSettingRequestV2, FuturesTransactionRecordV2, FuturesTriggerSubOrderV2, FuturesVipFeeRateV2, GetAnnouncementsRequestV2, GetBorrowHistoryRequestV2, GetConvertBGBHistoryRequestV2, GetConvertHistoryRequestV2, GetEarnSavingsAssetsRequestV2, GetEarnSavingsRecordsRequestV2, GetFinancialHistoryRequestV2, GetFollowerFuturesCurrentTrackingOrdersRequestV2, GetFollowerFuturesHistoryTrackingOrdersRequestV2, GetFuturesFollowerTradersRequestV2, GetFuturesTraderCurrentOrdersRequestV2, GetFuturesTraderFollowersRequestV2, GetFuturesTraderHistoryOrdersRequestV2, GetFuturesTraderProfitShareDetailRequestV2, GetFuturesTransactionsRequestV2, GetHistoryOrdersRequestV2, GetInterestHistoryRequestV2, GetLiquidationHistoryRequestV2, GetLiquidationRecordsRequestV2, GetLoanEstInterestAndBorrowableRequestV2, GetLoanHistoryRequestV2, GetLoanPledgeRateHistoryRequestV2, GetLoanRepayHistoryRequestV2, GetMarginCurrentOrdersRequestV2, GetMarginLiquidationOrdersRequestV2, GetMarginOrderFillsRequestV2, GetMarginTransactionsRequestV2, GetMerchantAdvertisementsRequestV2, GetMerchantP2POrdersRequestV2, GetP2PMerchantsRequestV2, GetP2PTransactionsRequestV2, GetRepayHistoryRequestV2, GetSharkfinAssetsRequestV2, GetSharkfinRecordsRequestV2, GetSpotAccountBillsRequestV2, GetSpotCurrentPlanOrdersRequestV2, GetSpotDepositRecordRequestV2, GetSpotFillsRequestV2, GetSpotFollowerHistoryOrdersRequestV2, GetSpotFollowerOpenOrdersRequestV2, GetSpotHistoryOrdersRequestV2, GetSpotHistoryPlanOrdersRequestV2, GetSpotOpenOrdersRequestV2, GetSpotOrderInfoRequestV2, GetSpotSubAccountDepositRecordRequestV2, GetSpotTraderCurrentOrdersRequestV2, GetSpotTraderFollowersRequestV2, GetSpotTraderHistoryOrdersRequestV2, GetSpotTraderHistoryProfitRequestV2, GetSpotTransactionsRequestV2, GetSpotTransferRecordRequestV2, GetSpotWithdrawalRecordRequestV2, GetSubAccountsRequestV2, GetTradeRateRequestV2, IsolatedInterestRateAndLimitResponseV2, IsolatedMarginBorrowingRatioV2, IsolatedMaxBorrowableResponseV2, IsolatedMaxTransferableResponseV2, IsolatedTierConfigurationResponseV2, LeveragedLongShortRatioV2, MarginAccountAssetV2, MarginBatchOrdersRequestV2, MarginBatchOrdersResponseV2, MarginBorrowHistoryItemV2, MarginCurrencyV2, MarginCurrentOrderV2, MarginFinancialHistoryItemV2, MarginHistoryOrderV2, MarginInterestHistoryItemV2, MarginLiquidationHistoryItemV2, MarginLiquidationOrderV2, MarginLoanGrowthRateV2, MarginOrderFillV2, MarginPlaceOrderRequestV2, MarginRepaymentHistoryItemV2, MarginTransactionRecordV2, MarginType, ModifyFuturesTraderOrderTPSLRequestV2, ModifyLoanPledgeRateRequestV2, ModifySubAccountApiKeyRequestV2, ModifySubaccountApiKeyResponseV2, ModifySubaccountResponseV2, ModifySubRequestV2, ModifyVirtualSubAccountApiKeyV2, ModifyVirtualSubApiKeyRequestV2, ModifyVirtualSubRequestV2, P2PMerchantAdvertismentV2, P2PMerchantInfoV2, P2PMerchantOrdersV2, P2PMerchantOrderV2, P2PMerchantV2, RedeemSavingsRequestV2, RepayLoanRequestV2, SetLeverageResponseV2, SetMarginModeResponseV2, SpotAccountAssetV2, SpotAccountBillV2, SpotAccountInfoV2, SpotAccountTypeV2, SpotBatchCancelOrderRequestV2, SpotBatchOrderRequestV2, SpotCancelandSubmitOrderRequestV2, SpotCancelOrderRequestV2, SpotCancelPlanOrdersV2, SpotCandlesRequestV2, SpotCandlestickV2, SpotCoinInfoV2, SpotCurrentPlanOrderV2, SpotDepositAddressV2, SpotDepositRecordV2, SpotFillV2, SpotFollowerCopyTradeSettingV2, SpotFundFlowV2, SpotHistoricCandlesRequestV2, SpotHistoricTradesRequestV2, SpotHistoryPlanOrderV2, SpotMainSubTransferRecordRequestV2, SpotMainSubTransferRecordV2, SpotMergeDepthV2, SpotModifyPlanOrderRequestV2, SpotOpenOrderV2, SpotOrderBookDepthV2, SpotOrderInfoV2, SpotOrderRequestV2, SpotPlanOrderRequestV2, SpotPlanSubOrderV2, SpotSubAccountAssetsV2, SpotSubAccountDepositRecordV2, SpotSubAccountTransferRequestV2, SpotSymbolInfoV2, SpotTickerV2, SpotTradeV2, SpotTransactionRecordV2, SpotTransferRecordV2, SpotTransferRequestV2, SpotVipFeeRateV2, SpotWhaleNetFlowV2, SpotWithdrawalRecordV2, SpotWithdrawalRequestV2, SubAccountApiKeyItemV2, SubaccountApiKeyV2, SubaccountDepositV2, SubaccountEmailV2, SubDepositRecordsRequestV2, SubmitSpotBatchOrdersResponseV2, SubWithdrawalRecordsRequestV2, SubWithdrawalRequestV2, UpdateFuturesFollowerSettingsRequestV2, UpdateFuturesFollowerTPSLRequestV2, VirtualSubAccountV2 } from './types';
import BaseRestClient from './util/BaseRestClient';
/**
 * REST API client for all V2 endpoints
 */
export declare class RestClientV2 extends BaseRestClient {
    getClientType(): "v2";
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
    fetchLatencySummary(): Promise<any>;
    fetchServerTime(): Promise<number>;
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
    getAnnouncements(params?: GetAnnouncementsRequestV2): Promise<APIResponse<AnnouncementV2[]>>;
    /**
     *
     * * Common | Public
     *
     */
    getServerTime(): Promise<APIResponse<{
        serverTime: string;
    }>>;
    getTradeRate(params: GetTradeRateRequestV2): Promise<APIResponse<{
        makerFeeRate: string;
        takerFeeRate: string;
    }>>;
    /**
     *
     * * Common | Tax
     *
     */
    getSpotTransactionRecords(params: GetSpotTransactionsRequestV2): Promise<APIResponse<SpotTransactionRecordV2[]>>;
    getFuturesTransactionRecords(params: GetFuturesTransactionsRequestV2): Promise<APIResponse<FuturesTransactionRecordV2[]>>;
    getMarginTransactionRecords(params: GetMarginTransactionsRequestV2): Promise<APIResponse<MarginTransactionRecordV2[]>>;
    getP2PTransactionRecords(params: GetP2PTransactionsRequestV2): Promise<APIResponse<P2PMerchantOrdersV2[]>>;
    /**
     *
     * * Common | P2P
     *
     */
    getP2PMerchantList(params?: GetP2PMerchantsRequestV2): Promise<APIResponse<{
        merchantList: P2PMerchantV2[];
        minMerchantId: string;
    }>>;
    getP2PMerchantInfo(): Promise<APIResponse<P2PMerchantInfoV2>>;
    getP2PMerchantOrders(params: GetMerchantP2POrdersRequestV2): Promise<APIResponse<{
        orderList: P2PMerchantOrderV2[];
        minOrderId: string;
    }>>;
    getP2PMerchantAdvertisementList(params: GetMerchantAdvertisementsRequestV2): Promise<APIResponse<{
        advList: P2PMerchantAdvertismentV2[];
        minAdvId: string;
    }>>;
    /**
     *
     * * Common | Trading insights
     *
     */
    getSpotWhaleNetFlowData(params: {
        symbol: string;
    }): Promise<APIResponse<SpotWhaleNetFlowV2[]>>;
    getFuturesActiveTakerBuySellVolumeData(params: {
        symbol: string;
        period?: string;
    }): Promise<APIResponse<FuturesActiveBuySellVolumeV2[]>>;
    getFuturesActiveLongShortPositionData(params: {
        symbol: string;
        period?: string;
    }): Promise<APIResponse<FuturesActiveLongShortPositionV2[]>>;
    getFuturesLongShortRatio(params: {
        symbol: string;
        period?: string;
        coin?: string;
    }): Promise<APIResponse<LeveragedLongShortRatioV2[]>>;
    getMarginLoanGrowthRate(params: {
        symbol: string;
        period?: string;
        coin?: string;
    }): Promise<APIResponse<MarginLoanGrowthRateV2[]>>;
    getIsolatedMarginBorrowingRatio(params: {
        symbol: string;
        period?: string;
    }): Promise<APIResponse<IsolatedMarginBorrowingRatioV2[]>>;
    getFuturesActiveBuySellVolumeData(params: {
        symbol: string;
        period?: string;
    }): Promise<APIResponse<FuturesLongShortRatioV2[]>>;
    getSpotFundFlow(params: {
        symbol: string;
        period?: string;
    }): Promise<APIResponse<SpotFundFlowV2>>;
    getTradeDataSupportSymbols(): Promise<APIResponse<{
        spotList: string[];
        futureList: string[];
    }>>;
    getSpotFundNetFlowData(params: {
        symbol: string;
    }): Promise<APIResponse<{
        netFlow: string;
        ts: string;
    }[]>>;
    getFuturesActiveLongShortAccountData(params: {
        symbol: string;
        period?: string;
    }): Promise<APIResponse<FuturesActiveLongShortAccountV2[]>>;
    /**
     *
     * * Common | Virtual Subaccount
     *
     */
    createVirtualSubaccount(params: {
        subAccountList: string[];
    }): Promise<APIResponse<CreateVirtualSubAccountV2>>;
    modifyVirtualSubaccount(params: ModifyVirtualSubRequestV2): Promise<APIResponse<{
        result: string;
    }>>;
    batchCreateVirtualSubaccountAndAPIKey(params: CreateVirtualSubRequestV2): Promise<APIResponse<CreateVirtualSubAccountAndApiKeyV2[]>>;
    getVirtualSubaccounts(params?: {
        limit?: string;
        idLessThan?: string;
        status?: 'normal' | 'freeze';
    }): Promise<APIResponse<{
        endId: string;
        subAccountList: VirtualSubAccountV2[];
    }>>;
    createVirtualSubaccountAPIKey(params: CreateVirtualSubApiKeyRequestV2): Promise<APIResponse<CreateVirtualSubAccountApiKeyV2>>;
    modifyVirtualSubaccountAPIKey(params: ModifyVirtualSubApiKeyRequestV2): Promise<APIResponse<ModifyVirtualSubAccountApiKeyV2>>;
    getVirtualSubaccountAPIKeys(params: {
        subAccountUid: string;
    }): Promise<APIResponse<SubAccountApiKeyItemV2[]>>;
    /**
     *
     * * Common | Assets
     *
     */
    getFundingAssets(params?: {
        coin?: string;
    }): Promise<APIResponse<FundingAssetV2[]>>;
    getBotAccount(params?: {
        accountType?: string;
    }): Promise<APIResponse<BotAssetV2[]>>;
    /** Get assets overview */
    getBalances(): Promise<APIResponse<{
        accountType: string;
        usdtBalance: string;
    }[]>>;
    /**
     *
     * * Common | Convert
     *
     */
    getConvertCoins(): Promise<APIResponse<ConvertCurrencyV2[]>>;
    getConvertQuotedPrice(params: ConvertQuoteRequestV2): Promise<APIResponse<ConvertQuotedPriceV2>>;
    convert(params: ConvertRequestV2): Promise<APIResponse<ConvertTradeResponseV2>>;
    getConvertHistory(params: GetConvertHistoryRequestV2): Promise<APIResponse<{
        dataList: ConvertRecordV2[];
        endId: string;
    }>>;
    /**
     *
     * * Common | BGB Convert
     *
     */
    getConvertBGBCoins(): Promise<APIResponse<{
        coinList: BGBConvertCoinV2[];
    }>>;
    convertBGB(params: {
        coinList: string;
    }): Promise<APIResponse<ConvertBGBResponseV2>>;
    getConvertBGBHistory(params: GetConvertBGBHistoryRequestV2): Promise<APIResponse<BGBConvertHistoryV2[]>>;
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
    getSpotCoinInfo(params?: {
        coin?: string;
    }): Promise<APIResponse<SpotCoinInfoV2[]>>;
    getSpotSymbolInfo(params?: {
        symbol?: string;
    }): Promise<APIResponse<SpotSymbolInfoV2[]>>;
    getSpotVIPFeeRate(): Promise<APIResponse<SpotVipFeeRateV2[]>>;
    getSpotTicker(params?: {
        symbol?: string;
    }): Promise<APIResponse<SpotTickerV2[]>>;
    getSpotMergeDepth(params: {
        symbol: string;
        precision?: string;
        limit?: string;
    }): Promise<APIResponse<SpotMergeDepthV2>>;
    getSpotOrderBookDepth(params: {
        symbol: string;
        type?: string;
        limit?: string;
    }): Promise<APIResponse<SpotOrderBookDepthV2>>;
    getSpotCandles(params: SpotCandlesRequestV2): Promise<APIResponse<SpotCandlestickV2[]>>;
    getSpotHistoricCandles(params: SpotHistoricCandlesRequestV2): Promise<APIResponse<SpotCandlestickV2[]>>;
    getSpotRecentTrades(params: {
        symbol: string;
        limit?: string;
    }): Promise<APIResponse<SpotTradeV2[]>>;
    getSpotHistoricTrades(params: SpotHistoricTradesRequestV2): Promise<APIResponse<SpotTradeV2[]>>;
    /**
     *
     * * Spot | Trade
     *
     */
    spotSubmitOrder(params: SpotOrderRequestV2): Promise<APIResponse<{
        orderId: string;
        clientOid: string;
    }>>;
    spotCancelandSubmitOrder(params: SpotCancelandSubmitOrderRequestV2): Promise<APIResponse<CancelAndSubmitSpotOrderResponseV2>>;
    spotBatchCancelandSubmitOrder(params: {
        orderList: SpotCancelandSubmitOrderRequestV2[];
    }): Promise<APIResponse<CancelAndSubmitSpotOrderResponseV2[]>>;
    spotCancelOrder(params: SpotCancelOrderRequestV2): Promise<APIResponse<{
        orderId: string;
        clientOid: string;
    }>>;
    spotBatchSubmitOrders(params: SpotBatchOrderRequestV2): Promise<APIResponse<SubmitSpotBatchOrdersResponseV2>>;
    spotBatchCancelOrders(params: SpotBatchCancelOrderRequestV2): Promise<APIResponse<SubmitSpotBatchOrdersResponseV2>>;
    spotCancelSymbolOrder(params: {
        symbol: string;
    }): Promise<APIResponse<{
        symbol: string;
    }>>;
    getSpotOrder(params?: GetSpotOrderInfoRequestV2): Promise<APIResponse<SpotOrderInfoV2[]>>;
    getSpotOpenOrders(params?: GetSpotOpenOrdersRequestV2): Promise<APIResponse<SpotOpenOrderV2[]>>;
    getSpotHistoricOrders(params?: GetSpotHistoryOrdersRequestV2): Promise<APIResponse<SpotOrderInfoV2[]>>;
    getSpotFills(params: GetSpotFillsRequestV2): Promise<APIResponse<SpotFillV2[]>>;
    /**
     *
     * * Spot | Trigger Orders
     *
     */
    spotSubmitPlanOrder(params: SpotPlanOrderRequestV2): Promise<APIResponse<{
        orderId: string;
        clientOid: string;
    }>>;
    spotModifyPlanOrder(params: SpotModifyPlanOrderRequestV2): Promise<APIResponse<{
        orderId: string;
        clientOid: string;
    }>>;
    spotCancelPlanOrder(params: {
        clientOid?: string;
        orderId?: string;
    }): Promise<APIResponse<{
        result: string;
    }>>;
    getSpotCurrentPlanOrders(params: GetSpotCurrentPlanOrdersRequestV2): Promise<APIResponse<{
        nextFlag: boolean;
        idLessThan: string;
        orderList: SpotCurrentPlanOrderV2[];
    }>>;
    getSpotPlanSubOrder(params: {
        planOrderId: string;
    }): Promise<APIResponse<SpotPlanSubOrderV2[]>>;
    getSpotHistoricPlanOrders(params: GetSpotHistoryPlanOrdersRequestV2): Promise<APIResponse<{
        nextFlag: boolean;
        idLessThan: string;
        orderList: SpotHistoryPlanOrderV2[];
    }>>;
    spotCancelPlanOrders(params?: {
        symbolList?: string[];
    }): Promise<APIResponse<SpotCancelPlanOrdersV2>>;
    /**
     *
     * * Spot | Account
     *
     */
    getSpotAccount(): Promise<APIResponse<SpotAccountInfoV2>>;
    getSpotAccountAssets(params?: {
        coin?: string;
        assetType?: string;
    }): Promise<APIResponse<SpotAccountAssetV2[]>>;
    getSpotSubAccountAssets(): Promise<APIResponse<SpotSubAccountAssetsV2[]>>;
    spotModifyDepositAccount(params: {
        accountType: string;
        coin: string;
    }): Promise<APIResponse<string>>;
    getSpotAccountBills(params?: GetSpotAccountBillsRequestV2): Promise<APIResponse<SpotAccountBillV2[]>>;
    spotTransfer(params: SpotTransferRequestV2): Promise<APIResponse<{
        transferId: string;
        clientOid: string;
    }>>;
    getSpotTransferableCoins(params: {
        fromType: SpotAccountTypeV2;
        toType: SpotAccountTypeV2;
    }): Promise<APIResponse<string[]>>;
    spotSubTransfer(params: SpotSubAccountTransferRequestV2): Promise<APIResponse<{
        transferId: string;
        clientOid: string;
    }>>;
    spotWithdraw(params: SpotWithdrawalRequestV2): Promise<APIResponse<{
        orderId: string;
        clientOid: string;
    }>>;
    getSpotMainSubTransferRecord(params: SpotMainSubTransferRecordRequestV2): Promise<APIResponse<SpotMainSubTransferRecordV2[]>>;
    getSpotTransferHistory(params: GetSpotTransferRecordRequestV2): Promise<APIResponse<SpotTransferRecordV2[]>>;
    spotSwitchBGBDeduct(params: {
        deduct: boolean;
    }): Promise<APIResponse<boolean>>;
    getSpotDepositAddress(params: {
        coin: string;
        chain?: string;
        size: string;
    }): Promise<APIResponse<SpotDepositAddressV2>>;
    getSpotSubDepositAddress(params: {
        subUid: string;
        coin: string;
        chain?: string;
        size: string;
    }): Promise<APIResponse<SpotDepositAddressV2>>;
    getSpotBGBDeductInfo(): Promise<APIResponse<{
        deduct: string;
    }>>;
    spotCancelWithdrawal(params: {
        orderId: string;
    }): Promise<APIResponse<string>>;
    getSubAccountDepositRecords(params: GetSpotSubAccountDepositRecordRequestV2): Promise<APIResponse<SpotSubAccountDepositRecordV2[]>>;
    getSpotWithdrawalHistory(params: GetSpotWithdrawalRecordRequestV2): Promise<APIResponse<SpotWithdrawalRecordV2[]>>;
    getSpotDepositHistory(params: GetSpotDepositRecordRequestV2): Promise<APIResponse<SpotDepositRecordV2[]>>;
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
    getFuturesVIPFeeRate(): Promise<APIResponse<FuturesVipFeeRateV2[]>>;
    getFuturesInterestRateHistory(params: {
        coin: string;
    }): Promise<APIResponse<{
        coin: string;
        historyInterestRateList: FuturesHistoryInterestRateV2[];
    }>>;
    getFuturesInterestExchangeRate(): Promise<APIResponse<{
        coin: string;
        exchangeRateList: FuturesInterestExchangeRateV2[];
    }[]>>;
    getFuturesDiscountRate(): Promise<APIResponse<FuturesDiscountRatesV2[]>>;
    getFuturesMergeDepth(params: FuturesMergeDepthRequestV2): Promise<APIResponse<FuturesMergeDepthV2>>;
    getFuturesTicker(params: {
        symbol: string;
        productType: FuturesProductTypeV2;
    }): Promise<APIResponse<FuturesTickerV2[]>>;
    getFuturesAllTickers(params: {
        productType: FuturesProductTypeV2;
    }): Promise<APIResponse<FuturesTickerV2[]>>;
    getFuturesRecentTrades(params: FuturesRecentTradesRequestV2): Promise<APIResponse<FuturesFillV2[]>>;
    getFuturesHistoricTrades(params: FuturesHistoricTradesRequestV2): Promise<APIResponse<FuturesFillV2[]>>;
    getFuturesCandles(params: FuturesCandlesRequestV2): Promise<APIResponse<FuturesCandlestickV2[]>>;
    getFuturesHistoricCandles(params: FuturesCandlesRequestV2): Promise<APIResponse<FuturesCandlestickV2[]>>;
    getFuturesHistoricIndexPriceCandles(params: FuturesCandlesRequestV2): Promise<APIResponse<FuturesCandlestickV2[]>>;
    getFuturesHistoricMarkPriceCandles(params: FuturesCandlesRequestV2): Promise<APIResponse<FuturesCandlestickV2[]>>;
    getFuturesOpenInterest(params: {
        symbol: string;
        productType: FuturesProductTypeV2;
    }): Promise<APIResponse<{
        openInterestList: FuturesOpenInterestV2[];
        ts: string;
    }>>;
    getFuturesNextFundingTime(params: {
        symbol: string;
        productType: FuturesProductTypeV2;
    }): Promise<APIResponse<FuturesFundingTimeV2[]>>;
    getFuturesSymbolPrice(params: {
        symbol: string;
        productType: FuturesProductTypeV2;
    }): Promise<APIResponse<FuturesSymbolPriceV2[]>>;
    getFuturesHistoricFundingRates(params: {
        symbol: string;
        productType: FuturesProductTypeV2;
        pageSize?: string;
        pageNumber?: string;
    }): Promise<APIResponse<FuturesHistoricalFundingRateV2>>;
    getFuturesCurrentFundingRate(params: {
        symbol: string;
        productType: FuturesProductTypeV2;
    }): Promise<APIResponse<{
        symbol: string;
        fundingRate: string;
    }[]>>;
    getFuturesContractConfig(params: {
        symbol?: string;
        productType: FuturesProductTypeV2;
    }): Promise<APIResponse<FuturesContractConfigV2[]>>;
    /**
     *
     * * Futures | Account
     *
     */
    getFuturesAccountAsset(params: FuturesSingleAccountRequestV2): Promise<APIResponse<FuturesAccountV2>>;
    getFuturesAccountAssets(params: {
        productType: FuturesProductTypeV2;
    }): Promise<APIResponse<FuturesAccountsV2[]>>;
    getFuturesSubAccountAssets(params: {
        productType: FuturesProductTypeV2;
    }): Promise<APIResponse<{
        userId: number;
        assetList: FuturesSubAccountAssetV2[];
    }[]>>;
    getFuturesInterestHistory(params: FuturesInterestHistoryRequestV2): Promise<APIResponse<FuturesInterestHistoryV2[]>>;
    getFuturesOpenCount(params: FuturesOpenCountRequestV2): Promise<APIResponse<{
        size: string;
    }>>;
    setFuturesPositionAutoMargin(params: FuturesSetAutoMarginRequestV2): Promise<APIResponse<string>>;
    setFuturesLeverage(params: FuturesSetLeverageRequestV2): Promise<APIResponse<SetLeverageResponseV2>>;
    setFuturesPositionMargin(params: FuturesSetPositionMarginRequestV2): Promise<APIResponse<string>>;
    setFuturesAssetMode(params: {
        productType: 'USDT-FUTURES' | 'SUSDT-FUTURES';
        assetMode: 'single' | 'union';
    }): Promise<APIResponse<string>>;
    setFuturesMarginMode(params: FuturesSetMarginModeRequestV2): Promise<APIResponse<SetMarginModeResponseV2>>;
    setFuturesPositionMode(params: {
        productType: FuturesProductTypeV2;
        posMode: 'one_way_mode' | 'hedge_mode';
    }): Promise<APIResponse<{
        posMode: 'one_way_mode' | 'hedge_mode';
    }>>;
    getFuturesAccountBills(params: FuturesAccountBillRequestV2): Promise<APIResponse<{
        bills: FuturesAccountBillV2[];
        endId: string;
    }>>;
    /**
     *
     * * Futures | Position
     *
     */
    getFuturesPositionTier(params: {
        productType: FuturesProductTypeV2;
        symbol: string;
    }): Promise<APIResponse<FuturesPositionTierV2[]>>;
    getFuturesPosition(params: {
        productType: FuturesProductTypeV2;
        symbol: string;
        marginCoin: string;
    }): Promise<APIResponse<FuturesPositionV2[]>>;
    getFuturesPositions(params: {
        productType: FuturesProductTypeV2;
        marginCoin?: string;
    }): Promise<APIResponse<FuturesPositionV2[]>>;
    getFuturesHistoricPositions(params?: FuturesHistoricalPositionsRequestV2): Promise<APIResponse<{
        list: FuturesHistoryPositionV2[];
        endId: string;
    }>>;
    /**
     *
     * * Futures | Trade
     *
     */
    futuresSubmitOrder(params: FuturesPlaceOrderRequestV2): Promise<APIResponse<{
        orderId: string;
        clientOid: string;
    }>>;
    futuresSubmitReversal(params: FuturesReversalOrderRequestV2): Promise<APIResponse<{
        orderId: string;
        clientOid: string;
    }>>;
    futuresBatchSubmitOrders(params: FuturesBatchOrderRequestV2): Promise<APIResponse<FuturesBatchOrderResponseV2>>;
    futuresModifyOrder(params: FuturesModifyOrderRequestV2): Promise<APIResponse<{
        orderId: string;
        clientOid: string;
    }>>;
    futuresCancelOrder(params: FuturesCancelOrderRequestV2): Promise<APIResponse<{
        orderId: string;
        clientOid: string;
    }>>;
    futuresBatchCancelOrders(params: FuturesBatchCancelOrderRequestV2): Promise<APIResponse<FuturesBatchOrderResponseV2>>;
    futuresFlashClosePositions(params: FuturesFlashClosePositionsRequestV2): Promise<APIResponse<FuturesClosePositionResponseV2>>;
    getFuturesOrder(params: FuturesGetOrderRequestV2): Promise<APIResponse<FuturesOrderDetailV2>>;
    getFuturesFills(params: FuturesGetOrderFillsRequestV2): Promise<APIResponse<{
        fillList: FuturesOrderFillV2[];
        endId: string;
    }>>;
    getFuturesHistoricOrderFills(params: FuturesGetHistoricalFillsRequestV2): Promise<APIResponse<{
        fillList: FuturesOrderFillV2[];
        endId: string;
    }>>;
    getFuturesOpenOrders(params: FuturesGetOpenOrdersRequestV2): Promise<APIResponse<{
        entrustedList: FuturesOpenOrderV2[];
        endId: string;
    }>>;
    getFuturesHistoricOrders(params: FuturesGetHistoryOrdersRequestV2): Promise<APIResponse<{
        entrustedList: FuturesHistoryOrderV2[];
        endId: string;
    }>>;
    futuresCancelAllOrders(params: FuturesCancelAllOrdersRequestV2): Promise<APIResponse<FuturesCancelAllOrdersV2>>;
    /**
     *
     * * Futures | Trigger Orders
     *
     */
    getFuturesTriggerSubOrder(params: {
        planType: 'normal_plan' | 'track_plan';
        planOrderId: string;
        productType: FuturesProductTypeV2;
    }): Promise<APIResponse<FuturesTriggerSubOrderV2[]>>;
    futuresSubmitTPSLOrder(params: FuturesTPSLOrderRequestV2): Promise<APIResponse<{
        orderId: string;
        clientOid: string;
    }>>;
    futuresSubmitPlanOrder(params: FuturesPlanOrderRequestV2): Promise<APIResponse<{
        orderId: string;
        clientOid: string;
    }>>;
    futuresModifyTPSLPOrder(params: FuturesModifyTPSLOrderRequestV2): Promise<APIResponse<{
        orderId: string;
        clientOid: string;
    }>>;
    futuresModifyPlanOrder(params: FuturesModifyPlanOrderRequestV2): Promise<APIResponse<{
        orderId: string;
        clientOid: string;
    }>>;
    getFuturesPlanOrders(params: FuturesGetPlanOrdersRequestV2): Promise<APIResponse<{
        entrustedList: FuturesPendingPlanOrderV2[];
        endId: string;
    }>>;
    futuresCancelPlanOrder(params: FuturesCancelPlanOrderRequestV2): Promise<APIResponse<FuturesCancelPlanOrderV2>>;
    getFuturesHistoricPlanOrders(params: FuturesGetHistoryPlanOrdersRequestV2): Promise<APIResponse<{
        entrustedList: FuturesHistoryPlanOrderV2[];
        endId: string;
    }>>;
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
    modifySubaccountEmail(params: {
        subUid: string;
        subaccountEmail: string;
    }): Promise<APIResponse<string>>;
    getBrokerInfo(): Promise<APIResponse<{
        subAccountSize: string;
        maxSubAccountSize: string;
        uTime: string;
    }>>;
    createSubaccount(params: {
        subaccountName: string;
        label: string;
    }): Promise<APIResponse<CreateSubaccountResponseV2>>;
    getSubaccounts(params?: GetSubAccountsRequestV2): Promise<APIResponse<{
        hasNextPage: boolean;
        idLessThan: number;
        subList: BrokerSubaccountV2[];
    }>>;
    modifySubaccount(params: ModifySubRequestV2): Promise<APIResponse<ModifySubaccountResponseV2>>;
    getSubaccountEmail(params: {
        subUid: string;
    }): Promise<APIResponse<SubaccountEmailV2>>;
    getSubaccountSpotAssets(params: {
        subUid: string;
        coin?: string;
        assetType?: 'hold_only' | 'all';
    }): Promise<APIResponse<{
        assetsList: BrokerSubaccountSpotAssetV2[];
    }>>;
    getSubaccountFuturesAssets(params: {
        subUid: string;
        productType: FuturesProductTypeV2;
    }): Promise<APIResponse<{
        assetsList: BrokerSubaccountFutureAssetV2[];
    }>>;
    createSubaccountDepositAddress(params: {
        subUid: string;
        coin: string;
        chain?: string;
    }): Promise<APIResponse<CreateSubaccountDepositAddressV2>>;
    subaccountWithdrawal(params: SubWithdrawalRequestV2): Promise<APIResponse<{
        orderId: string;
        clientOid: string;
    }>>;
    subaccountSetAutoTransfer(params: {
        subUid: string;
        coin: string;
        toAccountType: string;
    }): Promise<APIResponse<string>>;
    subaccountDepositRecords(params: SubDepositRecordsRequestV2): Promise<APIResponse<SubaccountDepositV2>>;
    subaccountWithdrawalRecords(params: SubWithdrawalRecordsRequestV2): Promise<APIResponse<{
        resultList: BrokerSubaccountWithdrawalV2[];
        endId: string;
    }>>;
    /**
     *
     *  Broker | Api Key
     *
     */
    createSubaccountApiKey(params: CreateSubAccountApiKeyRequestV2): Promise<APIResponse<CreateSubaccountApiKeyResponseV2>>;
    getSubaccountApiKey(params: {
        subUid: string;
    }): Promise<APIResponse<SubaccountApiKeyV2[]>>;
    modifySubaccountApiKey(params: ModifySubAccountApiKeyRequestV2): Promise<APIResponse<ModifySubaccountApiKeyResponseV2>>;
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
    getMarginCurrencies(): Promise<APIResponse<MarginCurrencyV2[]>>;
    /**
     *
     * * Margin | Cross/Isolated | Order Record
     *
     */
    getMarginBorrowHistory(marginType: MarginType, params: GetBorrowHistoryRequestV2): Promise<APIResponse<{
        resultList: MarginBorrowHistoryItemV2[];
        maxId: string;
        minId: string;
    }>>;
    getMarginRepayHistory(marginType: MarginType, params: GetRepayHistoryRequestV2): Promise<APIResponse<{
        resultList: MarginRepaymentHistoryItemV2[];
        maxId: string;
        minId: string;
    }>>;
    getMarginInterestHistory(marginType: MarginType, params: GetInterestHistoryRequestV2): Promise<APIResponse<{
        resultList: MarginInterestHistoryItemV2[];
        maxId: string;
        minId: string;
    }>>;
    getMarginLiquidationHistory(marginType: MarginType, params: GetLiquidationHistoryRequestV2): Promise<APIResponse<{
        resultList: MarginLiquidationHistoryItemV2[];
        maxId: string;
        minId: string;
    }>>;
    getMarginFinancialHistory(marginType: MarginType, params: GetFinancialHistoryRequestV2): Promise<APIResponse<{
        resultList: MarginFinancialHistoryItemV2[];
        maxId: string;
        minId: string;
    }>>;
    /**
     *
     * * Margin | Cross/Isolated | Account
     *
     */
    getMarginAccountAssets(marginType: MarginType, params?: {
        coin?: string;
    }): Promise<APIResponse<MarginAccountAssetV2[]>>;
    marginBorrow(marginType: MarginType, params: {
        loanId: string;
        symbol: string;
        coin: string;
        borrowAmount: string;
    }): Promise<APIResponse<{
        loanId: string;
        symbol: string;
        coin: string;
        borrowAmount: string;
    }>>;
    marginRepay(marginType: MarginType, params: {
        remainDebtAmount: string;
        symbol: string;
        repayId: string;
        coin: string;
        repayAmount: string;
    }): Promise<APIResponse<{
        symbol: string;
        coin: string;
        repayId: string;
        remainDebtAmount: string;
        repayAmount: string;
    }>>;
    getMarginRiskRate(marginType: MarginType): Promise<APIResponse<{
        symbol: string;
        riskRateRatio: string;
    }[]>>;
    getMarginMaxBorrowable(marginType: MarginType, params: {
        coin: string;
    }): Promise<APIResponse<CrossMaxBorrowableResponseV2 | IsolatedMaxBorrowableResponseV2>>;
    getMarginMaxTransferable(marginType: MarginType, params: {
        coin: string;
    }): Promise<APIResponse<CrossMaxTransferableResponseV2 | IsolatedMaxTransferableResponseV2>>;
    getMarginInterestRateAndMaxBorrowable(marginType: MarginType, params: {
        coin: string;
    }): Promise<APIResponse<IsolatedInterestRateAndLimitResponseV2[] | CrossInterestRateAndLimitResponseV2[]>>;
    getMarginTierConfiguration(marginType: MarginType, params: {
        coin: string;
    }): Promise<APIResponse<CrossTierConfigurationResponseV2[] | IsolatedTierConfigurationResponseV2[]>>;
    marginFlashRepay(marginType: MarginType, params: {
        coin: string;
    }): Promise<APIResponse<{
        repayId: string;
        coin?: string;
        symbol?: string;
        result?: string;
    }>>;
    getMarginFlashRepayResult(marginType: MarginType, params: {
        idList: string;
    }): Promise<APIResponse<{
        repayId: string;
        status: string;
    }[]>>;
    /**
     *
     * * Margin | Cross/Isolated | Trade
     *
     */
    marginSubmitOrder(marginType: MarginType, params: MarginPlaceOrderRequestV2): Promise<APIResponse<{
        orderId: string;
        clientOid: string;
    }>>;
    marginBatchSubmitOrders(marginType: MarginType, params: MarginBatchOrdersRequestV2): Promise<APIResponse<MarginBatchOrdersResponseV2>>;
    marginCancelOrder(marginType: MarginType, params: {
        symbol: string;
        orderId?: string;
        clientOid?: string;
    }): Promise<APIResponse<{
        orderId: string;
        clientOid: string;
    }>>;
    marginBatchCancelOrders(marginType: MarginType, params: {
        symbol: string;
        orderIdList: string[];
    }): Promise<APIResponse<MarginBatchOrdersResponseV2>>;
    getMarginOpenOrders(marginType: MarginType, params: GetMarginCurrentOrdersRequestV2): Promise<APIResponse<{
        orderList: MarginCurrentOrderV2[];
        maxId: string;
        minId: string;
    }>>;
    getMarginHistoricOrders(marginType: MarginType, params: GetHistoryOrdersRequestV2): Promise<APIResponse<{
        orderList: MarginHistoryOrderV2[];
        maxId: string;
        minId: string;
    }>>;
    getMarginHistoricOrderFills(marginType: MarginType, params: GetMarginOrderFillsRequestV2): Promise<APIResponse<{
        fills: MarginOrderFillV2[];
        minId: string;
        maxId: string;
    }>>;
    getMarginLiquidationOrders(marginType: MarginType, params: GetMarginLiquidationOrdersRequestV2): Promise<APIResponse<{
        resultList: MarginLiquidationOrderV2[];
        idLessThan: string;
    }>>;
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
    getFuturesTraderCurrentOrder(params: GetFuturesTraderCurrentOrdersRequestV2): Promise<APIResponse<CTFuturesTraderCurrentOrdersV2>>;
    getFuturesTraderHistoryOrders(params: GetFuturesTraderHistoryOrdersRequestV2): Promise<APIResponse<CTFuturesTraderHistoryOrderV2>>;
    modifyFuturesTraderOrderTPSL(params: ModifyFuturesTraderOrderTPSLRequestV2): Promise<APIResponse<string>>;
    getFuturesTraderOrder(): Promise<APIResponse<CTFuturesTraderTotalOrderSummaryV2>>;
    getFuturesTraderProfitHistory(): Promise<APIResponse<CTFuturesTraderHistoryProfitSummaryV2>>;
    getFuturesTraderProfitShareHistory(params: GetFuturesTraderProfitShareDetailRequestV2): Promise<APIResponse<CTFuturesTraderProfitShareHistoryV2>>;
    closeFuturesTraderOrder(params: {
        trackingNo: string;
        symbol: string;
        productType: CopyTradingProductTypeV2;
    }): Promise<APIResponse<{
        trackingNo: string;
        symbol: string;
        productType: string;
    }[]>>;
    getFuturesTraderProfitShare(params?: {
        coin?: string;
        pageSize?: string;
        pageNo?: string;
    }): Promise<APIResponse<{
        coin: string;
        profit: string;
        nickName: string;
    }[]>>;
    getFuturesTraderProfitShareGroup(params?: {
        pageSize?: string;
        pageNo?: string;
    }): Promise<APIResponse<{
        coin: string;
        profit: string;
        profitTime: string;
    }[]>>;
    getFuturesTraderSymbolSettings(params: {
        productType: CopyTradingProductTypeV2;
    }): Promise<APIResponse<CTFuturesTraderSymbolSettingsV2[]>>;
    updateFuturesTraderSymbolSettings(params: {
        settingList: FuturesTraderSymbolSettingRequestV2[];
    }): Promise<APIResponse<string>>;
    updateFuturesTraderGlobalSettings(params?: {
        enable?: 'YES' | 'NO';
        showTotalEquity?: 'YES' | 'NO';
        showTpsl?: 'YES' | 'NO';
    }): Promise<APIResponse<string>>;
    getFuturesTraderFollowers(params?: GetFuturesTraderFollowersRequestV2): Promise<APIResponse<CTFuturesTraderMyFollowersV2[]>>;
    removeFuturesTraderFollower(params: {
        followerUid: string;
    }): Promise<APIResponse<string>>;
    /**
     *
     *
     * Copy Trading | Future copy trading | Follower Api
     *
     *
     */
    getFuturesFollowerCurrentOrders(params: GetFollowerFuturesCurrentTrackingOrdersRequestV2): Promise<APIResponse<CTFuturesFollowerCurrentOrdersV2[]>>;
    getFuturesFollowerHistoryOrders(params: GetFollowerFuturesHistoryTrackingOrdersRequestV2): Promise<APIResponse<CTFuturesFollowerHistoryOrdersV2>>;
    updateFuturesFollowerTPSL(params: UpdateFuturesFollowerTPSLRequestV2): Promise<APIResponse<string>>;
    updateFuturesFollowerSettings(params: UpdateFuturesFollowerSettingsRequestV2): Promise<APIResponse<string>>;
    getFuturesFollowerSettings(params: {
        traderId: string;
    }): Promise<APIResponse<CTFuturesFollowerSettingsV2>>;
    closeFuturesFollowerPositions(params: CloseFuturesFollowerPositionsRequestV2): Promise<APIResponse<{
        orderIdList: string[];
    }>>;
    getFuturesFollowerTraders(params: GetFuturesFollowerTradersRequestV2): Promise<APIResponse<CTFuturesFollowerMyTradersV2[]>>;
    getFuturesFollowerFollowLimit(params: {
        symbol: string;
        productType: CopyTradingProductTypeV2;
    }): Promise<APIResponse<{
        maxFollowSize: string;
        minFollowSize: string;
        symbol: string;
    }[]>>;
    unfollowFuturesTrader(params: {
        traderId: string;
    }): Promise<APIResponse<string>>;
    /**
     *
     *
     * Copy Trading | Future copy trading | Broker api
     *
     *
     */
    getBrokerTraders(params: object): Promise<APIResponse<any>>;
    getBrokerTradersHistoricalOrders(params: object): Promise<APIResponse<any>>;
    getBrokerTradersPendingOrders(params: object): Promise<APIResponse<any>>;
    /**
     *
     *
     * Copy Trading | Spot copy trading | Trader api
     *
     *
     */
    getSpotTraderProfit(): Promise<APIResponse<CTSpotTraderProfitSummaryV2>>;
    getSpotTraderHistoryProfit(params: GetSpotTraderHistoryProfitRequestV2): Promise<APIResponse<CTSpotTraderHistoryProfitSharingV2>>;
    getSpotTraderUnrealizedProfit(params?: {
        coin?: string;
        pageNo?: string;
        pageSize?: string;
    }): Promise<APIResponse<CTSpotTraderUnrealizedProfitV2[]>>;
    getSpotTraderOrder(): Promise<APIResponse<CTSpotTraderTotalOrderDetailV2>>;
    modifySpotTraderOrderTPSL(params: {
        trackingNo: string;
        stopSurplusPrice?: string;
        stopLossPrice?: string;
    }): Promise<APIResponse<string>>;
    getSpotTraderHistoryOrders(params: GetSpotTraderHistoryOrdersRequestV2): Promise<APIResponse<CTSpotTraderHistoryOrdersV2>>;
    getSpotTraderCurrentOrders(params: GetSpotTraderCurrentOrdersRequestV2): Promise<APIResponse<CTSpotTraderCurrentTrackingOrdersV2>>;
    sellSpotTrader(params: {
        trackingNoList: string[];
        symbol: string;
    }): Promise<APIResponse<string>>;
    getSpotTraderSymbolSettings(params: {
        symbolList: string[];
        settingType: 'add' | 'delete';
    }): Promise<APIResponse<string>>;
    removeSpotTraderFollowers(params: {
        followerUid: string;
    }): Promise<APIResponse<string>>;
    getSpotTraderConfiguration(): Promise<APIResponse<any>>;
    getSpotTraderFollowers(params: GetSpotTraderFollowersRequestV2): Promise<APIResponse<CTSpotTraderFollowerListV2[]>>;
    /**
     *
     *
     * Copy Trading | Spot copy trading | Follower api
     *
     *
     */
    cancelSpotFollowerOrder(params: {
        trackingNoList: string[];
    }): Promise<APIResponse<string>>;
    updateSpotFollowerSettings(params: {
        traderId: string;
        autoCopy?: 'on' | 'off';
        mode?: 'basic' | 'advanced';
        settings: SpotFollowerCopyTradeSettingV2[];
    }): Promise<APIResponse<string>>;
    updateSpotFollowerTPSL(params: {
        trackingNo: string;
        stopSurplusPrice?: string;
        stopLossPrice?: string;
    }): Promise<APIResponse<string>>;
    getSpotFollowerTraders(params?: {
        pageNo?: string;
        pageSize?: string;
        startTime?: string;
        endTime?: string;
    }): Promise<APIResponse<CTSpotFollowerMyTradersV2>>;
    getSpotFollowerCurrentTraderSymbols(params: {
        traderId: string;
    }): Promise<APIResponse<{
        currentTradingList: string[];
    }>>;
    getSpotFollowerSettings(params: {
        traderId: string;
    }): Promise<APIResponse<CTSpotFollowerFollowConfigurationV2>>;
    getSpotFollowerHistoryOrders(params: GetSpotFollowerHistoryOrdersRequestV2): Promise<APIResponse<CTSpotFollowerHistoryOrdersV2>>;
    getSpotFollowerOpenOrders(params: GetSpotFollowerOpenOrdersRequestV2): Promise<APIResponse<CTSpotFollowerCurrentOrdersV2>>;
    sellSpotFollower(params: {
        trackingNoList: string[];
        symbol: string;
    }): Promise<APIResponse<string>>;
    unfollowSpotTrader(params: {
        traderId: string;
    }): Promise<APIResponse<string>>;
    /**
     *
     *
     * Earn | Savings
     *
     *
     */
    getEarnSavingsProducts(params?: {
        coin?: string;
        filter?: string;
    }): Promise<APIResponse<EarnSavingsProductsV2[]>>;
    getEarnSavingsAccount(): Promise<APIResponse<EarnSavingsAccountV2>>;
    getEarnSavingsAssets(params: GetEarnSavingsAssetsRequestV2): Promise<APIResponse<EarnSavingsAssetsV2>>;
    getEarnSavingsRecords(params: GetEarnSavingsRecordsRequestV2): Promise<APIResponse<EarnSavingsRecordsV2>>;
    getEarnSavingsSubscription(params: {
        productId: string;
        periodType: string;
    }): Promise<APIResponse<EarnSavingsSubscriptionDetailV2>>;
    earnSubscribeSavings(params: {
        productId: string;
        periodType: string;
        amount: string;
    }): Promise<APIResponse<{
        orderId: string;
        status: string;
    }>>;
    getEarnSavingsSubscriptionResult(params: {
        productId: string;
        periodType: string;
    }): Promise<APIResponse<{
        result: 'success' | 'fail';
        msg: string;
    }>>;
    earnRedeemSavings(params: RedeemSavingsRequestV2): Promise<APIResponse<{
        orderId: string;
        status: string;
    }>>;
    getEarnSavingsRedemptionResult(params: {
        orderId: string;
        periodType: string;
    }): Promise<APIResponse<{
        result: 'success' | 'fail';
        msg: string;
    }>>;
    /**
     *
     *
     * Earn | Earn Account
     *
     *
     */
    getEarnAccount(params?: {
        coin?: string;
    }): Promise<APIResponse<{
        coin: string;
        amount: string;
    }[]>>;
    /**
     *
     *
     * Earn | Shark Fin
     *
     *
     */
    getSharkfinProducts(params: {
        coin: string;
        limit?: string;
        idLessThan?: string;
    }): Promise<APIResponse<EarnSharkfinProductsV2>>;
    getSharkfinAccount(): Promise<APIResponse<EarnSharkfinAccountV2>>;
    getSharkfinAssets(params: GetSharkfinAssetsRequestV2): Promise<APIResponse<EarnSharkfinAssetsV2>>;
    getSharkfinRecords(params: GetSharkfinRecordsRequestV2): Promise<APIResponse<EarnSharkfinRecordsV2>>;
    getSharkfinSubscription(params: {
        productId: string;
    }): Promise<APIResponse<EarnSharkfinSubscriptionDetailV2>>;
    subscribeSharkfin(params: {
        productId: string;
        amount: string;
    }): Promise<APIResponse<{
        orderId: string;
        status: string;
    }>>;
    getSharkfinSubscriptionResult(params: {
        orderId: string;
    }): Promise<APIResponse<{
        result: 'success' | 'fail';
        msg: string;
    }>>;
    /**
     *
     *
     * Earn | Loan
     *
     *
     */
    getLoanCurrencies(params?: {
        coin?: string;
    }): Promise<APIResponse<EarnLoanCurrenciesV2>>;
    getLoanEstInterestAndBorrowable(params: GetLoanEstInterestAndBorrowableRequestV2): Promise<APIResponse<{
        hourInterest: string;
        loanAmount: string;
    }>>;
    borrowLoan(params: BorrowLoanRequestV2): Promise<APIResponse<{
        orderId: string;
    }>>;
    getOngoingLoanOrders(params?: {
        orderId?: string;
        loanCoin?: string;
        pledgeCoin?: string;
    }): Promise<APIResponse<EarnLoanOrdersV2[]>>;
    repayLoan(params: RepayLoanRequestV2): Promise<APIResponse<EarnLoanRepayResponseV2>>;
    getRepayHistory(params: GetLoanRepayHistoryRequestV2): Promise<APIResponse<EarnLoanRepayHistoryV2>>;
    updateLoanPledgeRate(params: ModifyLoanPledgeRateRequestV2): Promise<APIResponse<{
        loanCoin: string;
        pledgeCoin: string;
        afterPledgeRate: string;
    }>>;
    getLoanPledgeRateHistory(params: GetLoanPledgeRateHistoryRequestV2): Promise<APIResponse<EarnLoanPledgeRateHistoryV2[]>>;
    getLoanHistory(params: GetLoanHistoryRequestV2): Promise<APIResponse<EarnLoanHistoryV2[]>>;
    getLoanDebts(): Promise<APIResponse<EarnLoanDebtsV2>>;
    getLoanLiquidationRecords(params: GetLiquidationRecordsRequestV2): Promise<APIResponse<EarnLoanLiquidationRecordsV2[]>>;
}
