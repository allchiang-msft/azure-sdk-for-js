/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  GetTieringCostOperationResultGetOptionalParams,
  GetTieringCostOperationResultGetResponse,
} from "../models/index.js";

/** Interface representing a GetTieringCostOperationResult. */
export interface GetTieringCostOperationResult {
  /**
   * Gets the result of async operation for tiering cost
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param vaultName The name of the recovery services vault.
   * @param operationId
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    operationId: string,
    options?: GetTieringCostOperationResultGetOptionalParams,
  ): Promise<GetTieringCostOperationResultGetResponse>;
}
