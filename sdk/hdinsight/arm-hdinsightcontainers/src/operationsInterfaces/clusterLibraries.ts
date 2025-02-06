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
  ClusterLibrary,
  Category,
  ClusterLibrariesListOptionalParams,
  ClusterLibraryManagementOperation,
  ClusterLibrariesManageLibrariesOptionalParams,
  ClusterLibrariesManageLibrariesResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ClusterLibraries. */
export interface ClusterLibraries {
  /**
   * Get all libraries of HDInsight on AKS cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param category The system query option to filter libraries returned in the response. Allowed value
   *                 is 'custom' or 'predefined'.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    category: Category,
    options?: ClusterLibrariesListOptionalParams,
  ): PagedAsyncIterableIterator<ClusterLibrary>;
  /**
   * Library management operations on HDInsight on AKS cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param operation The library management operation.
   * @param options The options parameters.
   */
  beginManageLibraries(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    operation: ClusterLibraryManagementOperation,
    options?: ClusterLibrariesManageLibrariesOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClusterLibrariesManageLibrariesResponse>,
      ClusterLibrariesManageLibrariesResponse
    >
  >;
  /**
   * Library management operations on HDInsight on AKS cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterName The name of the HDInsight cluster.
   * @param operation The library management operation.
   * @param options The options parameters.
   */
  beginManageLibrariesAndWait(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterName: string,
    operation: ClusterLibraryManagementOperation,
    options?: ClusterLibrariesManageLibrariesOptionalParams,
  ): Promise<ClusterLibrariesManageLibrariesResponse>;
}
