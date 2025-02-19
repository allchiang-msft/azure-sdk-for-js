/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { TargetComputeSizes } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient.js";
import {
  TargetComputeSize,
  TargetComputeSizesListByReplicationProtectedItemsNextOptionalParams,
  TargetComputeSizesListByReplicationProtectedItemsOptionalParams,
  TargetComputeSizesListByReplicationProtectedItemsResponse,
  TargetComputeSizesListByReplicationProtectedItemsNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing TargetComputeSizes operations. */
export class TargetComputeSizesImpl implements TargetComputeSizes {
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class TargetComputeSizes class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Lists the available target compute sizes for a replication protected item.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName protection container name.
   * @param replicatedProtectedItemName Replication protected item name.
   * @param options The options parameters.
   */
  public listByReplicationProtectedItems(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    replicatedProtectedItemName: string,
    options?: TargetComputeSizesListByReplicationProtectedItemsOptionalParams,
  ): PagedAsyncIterableIterator<TargetComputeSize> {
    const iter = this.listByReplicationProtectedItemsPagingAll(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
      replicatedProtectedItemName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByReplicationProtectedItemsPagingPage(
          resourceName,
          resourceGroupName,
          fabricName,
          protectionContainerName,
          replicatedProtectedItemName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByReplicationProtectedItemsPagingPage(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    replicatedProtectedItemName: string,
    options?: TargetComputeSizesListByReplicationProtectedItemsOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<TargetComputeSize[]> {
    let result: TargetComputeSizesListByReplicationProtectedItemsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByReplicationProtectedItems(
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        replicatedProtectedItemName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByReplicationProtectedItemsNext(
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        replicatedProtectedItemName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByReplicationProtectedItemsPagingAll(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    replicatedProtectedItemName: string,
    options?: TargetComputeSizesListByReplicationProtectedItemsOptionalParams,
  ): AsyncIterableIterator<TargetComputeSize> {
    for await (const page of this.listByReplicationProtectedItemsPagingPage(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
      replicatedProtectedItemName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the available target compute sizes for a replication protected item.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName protection container name.
   * @param replicatedProtectedItemName Replication protected item name.
   * @param options The options parameters.
   */
  private _listByReplicationProtectedItems(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    replicatedProtectedItemName: string,
    options?: TargetComputeSizesListByReplicationProtectedItemsOptionalParams,
  ): Promise<TargetComputeSizesListByReplicationProtectedItemsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        replicatedProtectedItemName,
        options,
      },
      listByReplicationProtectedItemsOperationSpec,
    );
  }

  /**
   * ListByReplicationProtectedItemsNext
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName protection container name.
   * @param replicatedProtectedItemName Replication protected item name.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListByReplicationProtectedItems method.
   * @param options The options parameters.
   */
  private _listByReplicationProtectedItemsNext(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    replicatedProtectedItemName: string,
    nextLink: string,
    options?: TargetComputeSizesListByReplicationProtectedItemsNextOptionalParams,
  ): Promise<TargetComputeSizesListByReplicationProtectedItemsNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        replicatedProtectedItemName,
        nextLink,
        options,
      },
      listByReplicationProtectedItemsNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByReplicationProtectedItemsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/targetComputeSizes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TargetComputeSizeCollection,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.replicatedProtectedItemName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByReplicationProtectedItemsNextOperationSpec: coreClient.OperationSpec =
  {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.TargetComputeSizeCollection,
      },
    },
    urlParameters: [
      Parameters.$host,
      Parameters.resourceGroupName,
      Parameters.subscriptionId,
      Parameters.nextLink,
      Parameters.resourceName,
      Parameters.fabricName,
      Parameters.protectionContainerName,
      Parameters.replicatedProtectedItemName,
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
