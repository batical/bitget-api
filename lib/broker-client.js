"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerClient = void 0;
const util_1 = require("./util");
const BaseRestClient_1 = __importDefault(require("./util/BaseRestClient"));
/**
 * REST API client for the V1 bitget Broker APIs. These are the previous generation of Bitget's APIs and should be considered deprecated.
 * These will be removed in a future release, once Bitget formally deprecates them.
 *
 * @deprecated use RestClientV2 instead
 */
class BrokerClient extends BaseRestClient_1.default {
    getClientType() {
        return util_1.REST_CLIENT_TYPE_ENUM.broker;
    }
    /**
     *
     * Sub Account Interface
     *
     */
    /** Get Broker Info */
    getBrokerInfo() {
        return this.getPrivate('/api/broker/v1/account/info');
    }
    /** Create Sub Account */
    createSubAccount(subName, remark) {
        return this.postPrivate('/api/broker/v1/account/sub-create', {
            subName,
            remark,
        });
    }
    /** Get Sub List */
    getSubAccounts(params) {
        return this.getPrivate('/api/broker/v1/account/sub-list', params);
    }
    /** Modify Sub Account */
    modifySubAccount(subUid, perm, status) {
        return this.postPrivate('/api/broker/v1/account/sub-modify', {
            subUid,
            perm,
            status,
        });
    }
    /** Modify Sub Email */
    modifySubEmail(subUid, subEmail) {
        return this.postPrivate('/api/broker/v1/account/sub-modify-email', {
            subUid,
            subEmail,
        });
    }
    /** Get Sub Email */
    getSubEmail(subUid) {
        return this.getPrivate('/api/broker/v1/account/sub-email', { subUid });
    }
    /** Get Sub Spot Assets */
    getSubSpotAssets(subUid) {
        return this.getPrivate('/api/broker/v1/account/sub-spot-assets', {
            subUid,
        });
    }
    /** Get Sub Future Assets */
    getSubFutureAssets(subUid, productType) {
        return this.getPrivate('/api/broker/v1/account/sub-future-assets', {
            subUid,
            productType,
        });
    }
    /** Get Sub Deposit Address (Only Broker) */
    getSubDepositAddress(subUid, coin, chain) {
        return this.postPrivate('/api/broker/v1/account/sub-address', {
            subUid,
            coin,
            chain,
        });
    }
    /** Sub Withdrawal (Only Broker) */
    subWithdrawal(params) {
        return this.postPrivate('/api/broker/v1/account/sub-withdrawal', params);
    }
    /** Sub Deposit Auto Transfer (Only Broker) */
    setSubDepositAutoTransfer(subUid, coin, toAccountType) {
        return this.postPrivate('/api/broker/v1/account/sub-auto-transfer', {
            subUid,
            coin,
            toAccountType,
        });
    }
    /**
     *
     * Sub API Interface
     *
     */
    /** Create Sub ApiKey (Only Broker) */
    createSubAPIKey(subUid, passphrase, remark, ip, perm) {
        return this.postPrivate('/api/broker/v1/manage/sub-api-create', {
            subUid,
            passphrase,
            remark,
            ip,
            perm,
        });
    }
    /** Get Sub ApiKey List */
    getSubAPIKeys(subUid) {
        return this.getPrivate('/api/broker/v1/manage/sub-api-list', { subUid });
    }
    /** Modify Sub ApiKey (Only Broker) */
    modifySubAPIKey(params) {
        return this.postPrivate('/api/broker/v1/manage/sub-api-modify', params);
    }
    /**
     * Undocumented endpoints
     */
    getAgentCommissionDetail(params) {
        return this.getPrivate('/api/broker/v1/agent/commission-distribution', params);
    }
    /** Get Agent Customer List */
    getAgentCustomerList(params) {
        return this.postPrivate('/api/broker/v1/agent/customerList', params);
    }
    /**
     * Get Agent Customer Deposit List
     * Includes both on-chain deposits and internal transfers
     * Note: Can only query data within the last 90 days
     */
    getAgentCustomerDepositList(params) {
        return this.postPrivate('/api/broker/v1/agent/customerDepositList', params);
    }
    /**
     * Get Agent Customer Trade Volume List
     * Includes trading volume for both spot and futures
     * Note: Data updates every 10 minutes and can only query last 90 days
     */
    getAgentCustomerTradeVolumeList(params) {
        return this.postPrivate('/api/broker/v1/agent/customerTradeVolumnList', params);
    }
    /**
     * Get Agent Customer Assets List
     * Returns account balances for customer accounts
     * Note: Data updates every 10 minutes
     */
    getAgentCustomerAssetsList(params) {
        return this.postPrivate('/api/broker/v1/agent/customerAccountAssetsList', params);
    }
    /**
     * Get Agent Direct Commissions
     * Returns commission data for direct customers
     * Note: Data updates on T+1 (UTC+8) basis and can only query last 90 days
     */
    getAgentCustomerCommissions(params) {
        return this.getPrivate('/api/broker/v1/agent/customer-commissions', params);
    }
    /**
     * Get Agent Customer KYC Result
     * Returns KYC verification status for customers
     */
    getAgentCustomerKycResult(params) {
        return this.getPrivate('/api/broker/v1/agent/customer-kyc-result', params);
    }
}
exports.BrokerClient = BrokerClient;
//# sourceMappingURL=broker-client.js.map