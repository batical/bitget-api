import { MarginType, WsAccountSnapshotUMCBL, WSPositionSnapshotUMCBL, WsSnapshotAccountEvent, WsSnapshotPositionsEvent } from '../types';
/** TypeGuard: event is an account update (balance) */
export declare function isWsAccountSnapshotEvent(event: unknown): event is WsSnapshotAccountEvent;
/** TypeGuard: event is a positions update */
export declare function isWsPositionsSnapshotEvent(event: unknown): event is WsSnapshotPositionsEvent;
/** TypeGuard: event is a UMCBL account update (balance) */
export declare function isWsFuturesAccountSnapshotEvent(event: unknown): event is WsAccountSnapshotUMCBL;
/** TypeGuard: event is a UMCBL positions update */
export declare function isWsFuturesPositionsSnapshotEvent(event: unknown): event is WSPositionSnapshotUMCBL;
/**
 * Simple guard for non-TypeScript users, throw a runtime error if value doesn't match type
 */
export declare function assertMarginType(marginType: string): marginType is MarginType;
