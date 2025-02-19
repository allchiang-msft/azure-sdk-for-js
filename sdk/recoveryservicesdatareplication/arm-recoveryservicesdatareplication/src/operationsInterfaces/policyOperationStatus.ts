/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PolicyOperationStatusGetOptionalParams,
  PolicyOperationStatusGetResponse
} from "../models/index.js";

/** Interface representing a PolicyOperationStatus. */
export interface PolicyOperationStatus {
  /**
   * Tracks the results of an asynchronous operation on the policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param policyName The policy name.
   * @param operationId The ID of an ongoing async operation.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    policyName: string,
    operationId: string,
    options?: PolicyOperationStatusGetOptionalParams
  ): Promise<PolicyOperationStatusGetResponse>;
}
