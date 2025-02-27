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
  Replication,
  ReplicationsListOptionalParams,
  ReplicationsGetOptionalParams,
  ReplicationsGetResponse,
  ReplicationsCreateOptionalParams,
  ReplicationsCreateResponse,
  ReplicationsDeleteOptionalParams,
  ReplicationUpdateParameters,
  ReplicationsUpdateOptionalParams,
  ReplicationsUpdateResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Replications. */
export interface Replications {
  /**
   * Lists all the replications for the specified container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    registryName: string,
    options?: ReplicationsListOptionalParams,
  ): PagedAsyncIterableIterator<Replication>;
  /**
   * Gets the properties of the specified replication.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param replicationName The name of the replication.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    replicationName: string,
    options?: ReplicationsGetOptionalParams,
  ): Promise<ReplicationsGetResponse>;
  /**
   * Creates a replication for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param replicationName The name of the replication.
   * @param replication The parameters for creating a replication.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    registryName: string,
    replicationName: string,
    replication: Replication,
    options?: ReplicationsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationsCreateResponse>,
      ReplicationsCreateResponse
    >
  >;
  /**
   * Creates a replication for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param replicationName The name of the replication.
   * @param replication The parameters for creating a replication.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    registryName: string,
    replicationName: string,
    replication: Replication,
    options?: ReplicationsCreateOptionalParams,
  ): Promise<ReplicationsCreateResponse>;
  /**
   * Deletes a replication from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param replicationName The name of the replication.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    registryName: string,
    replicationName: string,
    options?: ReplicationsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a replication from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param replicationName The name of the replication.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    replicationName: string,
    options?: ReplicationsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Updates a replication for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param replicationName The name of the replication.
   * @param replicationUpdateParameters The parameters for updating a replication.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    registryName: string,
    replicationName: string,
    replicationUpdateParameters: ReplicationUpdateParameters,
    options?: ReplicationsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationsUpdateResponse>,
      ReplicationsUpdateResponse
    >
  >;
  /**
   * Updates a replication for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param replicationName The name of the replication.
   * @param replicationUpdateParameters The parameters for updating a replication.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    registryName: string,
    replicationName: string,
    replicationUpdateParameters: ReplicationUpdateParameters,
    options?: ReplicationsUpdateOptionalParams,
  ): Promise<ReplicationsUpdateResponse>;
}
