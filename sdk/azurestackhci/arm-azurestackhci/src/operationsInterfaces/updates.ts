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
  Update,
  UpdatesListOptionalParams,
  UpdatesPostOptionalParams,
  UpdatesDeleteOptionalParams,
  UpdatesPutOptionalParams,
  UpdatesPutResponse,
  UpdatesGetOptionalParams,
  UpdatesGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Updates. */
export interface Updates {
  /**
   * List all Updates
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    clusterName: string,
    options?: UpdatesListOptionalParams,
  ): PagedAsyncIterableIterator<Update>;
  /**
   * Apply Update
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param updateName The name of the Update
   * @param options The options parameters.
   */
  beginPost(
    resourceGroupName: string,
    clusterName: string,
    updateName: string,
    options?: UpdatesPostOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Apply Update
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param updateName The name of the Update
   * @param options The options parameters.
   */
  beginPostAndWait(
    resourceGroupName: string,
    clusterName: string,
    updateName: string,
    options?: UpdatesPostOptionalParams,
  ): Promise<void>;
  /**
   * Delete specified Update
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param updateName The name of the Update
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    updateName: string,
    options?: UpdatesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete specified Update
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param updateName The name of the Update
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    updateName: string,
    options?: UpdatesDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Put specified Update
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param updateName The name of the Update
   * @param updateProperties Properties of the Updates object
   * @param options The options parameters.
   */
  put(
    resourceGroupName: string,
    clusterName: string,
    updateName: string,
    updateProperties: Update,
    options?: UpdatesPutOptionalParams,
  ): Promise<UpdatesPutResponse>;
  /**
   * Get specified Update
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param updateName The name of the Update
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    updateName: string,
    options?: UpdatesGetOptionalParams,
  ): Promise<UpdatesGetResponse>;
}
