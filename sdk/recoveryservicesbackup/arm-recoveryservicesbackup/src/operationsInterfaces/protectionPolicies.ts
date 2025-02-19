/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ProtectionPoliciesGetOptionalParams,
  ProtectionPoliciesGetResponse,
  ProtectionPolicyResource,
  ProtectionPoliciesCreateOrUpdateOptionalParams,
  ProtectionPoliciesCreateOrUpdateResponse,
  ProtectionPoliciesDeleteOptionalParams,
} from "../models/index.js";

/** Interface representing a ProtectionPolicies. */
export interface ProtectionPolicies {
  /**
   * Provides the details of the backup policies associated to Recovery Services Vault. This is an
   * asynchronous
   * operation. Status of the operation can be fetched using GetPolicyOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param policyName Backup policy information to be fetched.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    policyName: string,
    options?: ProtectionPoliciesGetOptionalParams,
  ): Promise<ProtectionPoliciesGetResponse>;
  /**
   * Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can
   * be fetched
   * using GetPolicyOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param policyName Backup policy to be created.
   * @param parameters resource backup policy
   * @param options The options parameters.
   */
  createOrUpdate(
    vaultName: string,
    resourceGroupName: string,
    policyName: string,
    parameters: ProtectionPolicyResource,
    options?: ProtectionPoliciesCreateOrUpdateOptionalParams,
  ): Promise<ProtectionPoliciesCreateOrUpdateResponse>;
  /**
   * Deletes specified backup policy from your Recovery Services Vault. This is an asynchronous
   * operation. Status of the
   * operation can be fetched using GetProtectionPolicyOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param policyName Backup policy to be deleted.
   * @param options The options parameters.
   */
  beginDelete(
    vaultName: string,
    resourceGroupName: string,
    policyName: string,
    options?: ProtectionPoliciesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes specified backup policy from your Recovery Services Vault. This is an asynchronous
   * operation. Status of the
   * operation can be fetched using GetProtectionPolicyOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param policyName Backup policy to be deleted.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    vaultName: string,
    resourceGroupName: string,
    policyName: string,
    options?: ProtectionPoliciesDeleteOptionalParams,
  ): Promise<void>;
}
