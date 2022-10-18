/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  AzureDevOpsConnectorStatsGetOptionalParams,
  AzureDevOpsConnectorStatsGetResponse
} from "../models";

/** Interface representing a AzureDevOpsConnectorStatsOperations. */
export interface AzureDevOpsConnectorStatsOperations {
  /**
   * Returns the summary of the AzureDevOps Connector Stats.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    options?: AzureDevOpsConnectorStatsGetOptionalParams
  ): Promise<AzureDevOpsConnectorStatsGetResponse>;
}