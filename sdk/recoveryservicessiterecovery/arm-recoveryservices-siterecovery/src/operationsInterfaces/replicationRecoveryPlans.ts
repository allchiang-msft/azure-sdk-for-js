/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  RecoveryPlan,
  ReplicationRecoveryPlansListOptionalParams,
  ReplicationRecoveryPlansGetOptionalParams,
  ReplicationRecoveryPlansGetResponse,
  CreateRecoveryPlanInput,
  ReplicationRecoveryPlansCreateOptionalParams,
  ReplicationRecoveryPlansCreateResponse,
  ReplicationRecoveryPlansDeleteOptionalParams,
  UpdateRecoveryPlanInput,
  ReplicationRecoveryPlansUpdateOptionalParams,
  ReplicationRecoveryPlansUpdateResponse,
  ReplicationRecoveryPlansFailoverCancelOptionalParams,
  ReplicationRecoveryPlansFailoverCancelResponse,
  ReplicationRecoveryPlansFailoverCommitOptionalParams,
  ReplicationRecoveryPlansFailoverCommitResponse,
  RecoveryPlanPlannedFailoverInput,
  ReplicationRecoveryPlansPlannedFailoverOptionalParams,
  ReplicationRecoveryPlansPlannedFailoverResponse,
  ReplicationRecoveryPlansReprotectOptionalParams,
  ReplicationRecoveryPlansReprotectResponse,
  RecoveryPlanTestFailoverInput,
  ReplicationRecoveryPlansTestFailoverOptionalParams,
  ReplicationRecoveryPlansTestFailoverResponse,
  RecoveryPlanTestFailoverCleanupInput,
  ReplicationRecoveryPlansTestFailoverCleanupOptionalParams,
  ReplicationRecoveryPlansTestFailoverCleanupResponse,
  RecoveryPlanUnplannedFailoverInput,
  ReplicationRecoveryPlansUnplannedFailoverOptionalParams,
  ReplicationRecoveryPlansUnplannedFailoverResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ReplicationRecoveryPlans. */
export interface ReplicationRecoveryPlans {
  /**
   * Lists the recovery plans in the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  list(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationRecoveryPlansListOptionalParams,
  ): PagedAsyncIterableIterator<RecoveryPlan>;
  /**
   * Gets the details of the recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Name of the recovery plan.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    options?: ReplicationRecoveryPlansGetOptionalParams,
  ): Promise<ReplicationRecoveryPlansGetResponse>;
  /**
   * The operation to create a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param input Recovery Plan creation input.
   * @param options The options parameters.
   */
  beginCreate(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    input: CreateRecoveryPlanInput,
    options?: ReplicationRecoveryPlansCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationRecoveryPlansCreateResponse>,
      ReplicationRecoveryPlansCreateResponse
    >
  >;
  /**
   * The operation to create a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param input Recovery Plan creation input.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    input: CreateRecoveryPlanInput,
    options?: ReplicationRecoveryPlansCreateOptionalParams,
  ): Promise<ReplicationRecoveryPlansCreateResponse>;
  /**
   * Delete a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    options?: ReplicationRecoveryPlansDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    options?: ReplicationRecoveryPlansDeleteOptionalParams,
  ): Promise<void>;
  /**
   * The operation to update a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param input Update recovery plan input.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    input: UpdateRecoveryPlanInput,
    options?: ReplicationRecoveryPlansUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationRecoveryPlansUpdateResponse>,
      ReplicationRecoveryPlansUpdateResponse
    >
  >;
  /**
   * The operation to update a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param input Update recovery plan input.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    input: UpdateRecoveryPlanInput,
    options?: ReplicationRecoveryPlansUpdateOptionalParams,
  ): Promise<ReplicationRecoveryPlansUpdateResponse>;
  /**
   * The operation to cancel the failover of a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param options The options parameters.
   */
  beginFailoverCancel(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    options?: ReplicationRecoveryPlansFailoverCancelOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationRecoveryPlansFailoverCancelResponse>,
      ReplicationRecoveryPlansFailoverCancelResponse
    >
  >;
  /**
   * The operation to cancel the failover of a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param options The options parameters.
   */
  beginFailoverCancelAndWait(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    options?: ReplicationRecoveryPlansFailoverCancelOptionalParams,
  ): Promise<ReplicationRecoveryPlansFailoverCancelResponse>;
  /**
   * The operation to commit the failover of a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param options The options parameters.
   */
  beginFailoverCommit(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    options?: ReplicationRecoveryPlansFailoverCommitOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationRecoveryPlansFailoverCommitResponse>,
      ReplicationRecoveryPlansFailoverCommitResponse
    >
  >;
  /**
   * The operation to commit the failover of a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param options The options parameters.
   */
  beginFailoverCommitAndWait(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    options?: ReplicationRecoveryPlansFailoverCommitOptionalParams,
  ): Promise<ReplicationRecoveryPlansFailoverCommitResponse>;
  /**
   * The operation to start the planned failover of a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param input Failover input.
   * @param options The options parameters.
   */
  beginPlannedFailover(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    input: RecoveryPlanPlannedFailoverInput,
    options?: ReplicationRecoveryPlansPlannedFailoverOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationRecoveryPlansPlannedFailoverResponse>,
      ReplicationRecoveryPlansPlannedFailoverResponse
    >
  >;
  /**
   * The operation to start the planned failover of a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param input Failover input.
   * @param options The options parameters.
   */
  beginPlannedFailoverAndWait(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    input: RecoveryPlanPlannedFailoverInput,
    options?: ReplicationRecoveryPlansPlannedFailoverOptionalParams,
  ): Promise<ReplicationRecoveryPlansPlannedFailoverResponse>;
  /**
   * The operation to reprotect(reverse replicate) a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param options The options parameters.
   */
  beginReprotect(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    options?: ReplicationRecoveryPlansReprotectOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationRecoveryPlansReprotectResponse>,
      ReplicationRecoveryPlansReprotectResponse
    >
  >;
  /**
   * The operation to reprotect(reverse replicate) a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param options The options parameters.
   */
  beginReprotectAndWait(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    options?: ReplicationRecoveryPlansReprotectOptionalParams,
  ): Promise<ReplicationRecoveryPlansReprotectResponse>;
  /**
   * The operation to start the test failover of a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param input Recovery plan test failover input.
   * @param options The options parameters.
   */
  beginTestFailover(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    input: RecoveryPlanTestFailoverInput,
    options?: ReplicationRecoveryPlansTestFailoverOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationRecoveryPlansTestFailoverResponse>,
      ReplicationRecoveryPlansTestFailoverResponse
    >
  >;
  /**
   * The operation to start the test failover of a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param input Recovery plan test failover input.
   * @param options The options parameters.
   */
  beginTestFailoverAndWait(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    input: RecoveryPlanTestFailoverInput,
    options?: ReplicationRecoveryPlansTestFailoverOptionalParams,
  ): Promise<ReplicationRecoveryPlansTestFailoverResponse>;
  /**
   * The operation to cleanup test failover of a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param input Recovery plan test failover cleanup input.
   * @param options The options parameters.
   */
  beginTestFailoverCleanup(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    input: RecoveryPlanTestFailoverCleanupInput,
    options?: ReplicationRecoveryPlansTestFailoverCleanupOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationRecoveryPlansTestFailoverCleanupResponse>,
      ReplicationRecoveryPlansTestFailoverCleanupResponse
    >
  >;
  /**
   * The operation to cleanup test failover of a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param input Recovery plan test failover cleanup input.
   * @param options The options parameters.
   */
  beginTestFailoverCleanupAndWait(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    input: RecoveryPlanTestFailoverCleanupInput,
    options?: ReplicationRecoveryPlansTestFailoverCleanupOptionalParams,
  ): Promise<ReplicationRecoveryPlansTestFailoverCleanupResponse>;
  /**
   * The operation to start the unplanned failover of a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param input Recovery plan unplanned failover input.
   * @param options The options parameters.
   */
  beginUnplannedFailover(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    input: RecoveryPlanUnplannedFailoverInput,
    options?: ReplicationRecoveryPlansUnplannedFailoverOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationRecoveryPlansUnplannedFailoverResponse>,
      ReplicationRecoveryPlansUnplannedFailoverResponse
    >
  >;
  /**
   * The operation to start the unplanned failover of a recovery plan.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param recoveryPlanName Recovery plan name.
   * @param input Recovery plan unplanned failover input.
   * @param options The options parameters.
   */
  beginUnplannedFailoverAndWait(
    resourceName: string,
    resourceGroupName: string,
    recoveryPlanName: string,
    input: RecoveryPlanUnplannedFailoverInput,
    options?: ReplicationRecoveryPlansUnplannedFailoverOptionalParams,
  ): Promise<ReplicationRecoveryPlansUnplannedFailoverResponse>;
}
