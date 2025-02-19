/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ReplicationProtectableItems } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient.js";
import {
  ProtectableItem,
  ReplicationProtectableItemsListByReplicationProtectionContainersNextOptionalParams,
  ReplicationProtectableItemsListByReplicationProtectionContainersOptionalParams,
  ReplicationProtectableItemsListByReplicationProtectionContainersResponse,
  ReplicationProtectableItemsGetOptionalParams,
  ReplicationProtectableItemsGetResponse,
  ReplicationProtectableItemsListByReplicationProtectionContainersNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReplicationProtectableItems operations. */
export class ReplicationProtectableItemsImpl
  implements ReplicationProtectableItems
{
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class ReplicationProtectableItems class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Lists the protectable items in a protection container.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param options The options parameters.
   */
  public listByReplicationProtectionContainers(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    options?: ReplicationProtectableItemsListByReplicationProtectionContainersOptionalParams,
  ): PagedAsyncIterableIterator<ProtectableItem> {
    const iter = this.listByReplicationProtectionContainersPagingAll(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
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
        return this.listByReplicationProtectionContainersPagingPage(
          resourceName,
          resourceGroupName,
          fabricName,
          protectionContainerName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByReplicationProtectionContainersPagingPage(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    options?: ReplicationProtectableItemsListByReplicationProtectionContainersOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ProtectableItem[]> {
    let result: ReplicationProtectableItemsListByReplicationProtectionContainersResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByReplicationProtectionContainers(
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByReplicationProtectionContainersNext(
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByReplicationProtectionContainersPagingAll(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    options?: ReplicationProtectableItemsListByReplicationProtectionContainersOptionalParams,
  ): AsyncIterableIterator<ProtectableItem> {
    for await (const page of this.listByReplicationProtectionContainersPagingPage(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the protectable items in a protection container.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param options The options parameters.
   */
  private _listByReplicationProtectionContainers(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    options?: ReplicationProtectableItemsListByReplicationProtectionContainersOptionalParams,
  ): Promise<ReplicationProtectableItemsListByReplicationProtectionContainersResponse> {
    return this.client.sendOperationRequest(
      {
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        options,
      },
      listByReplicationProtectionContainersOperationSpec,
    );
  }

  /**
   * The operation to get the details of a protectable item.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param protectableItemName Protectable item name.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    protectableItemName: string,
    options?: ReplicationProtectableItemsGetOptionalParams,
  ): Promise<ReplicationProtectableItemsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        protectableItemName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * ListByReplicationProtectionContainersNext
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListByReplicationProtectionContainers method.
   * @param options The options parameters.
   */
  private _listByReplicationProtectionContainersNext(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    nextLink: string,
    options?: ReplicationProtectableItemsListByReplicationProtectionContainersNextOptionalParams,
  ): Promise<ReplicationProtectableItemsListByReplicationProtectionContainersNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        nextLink,
        options,
      },
      listByReplicationProtectionContainersNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByReplicationProtectionContainersOperationSpec: coreClient.OperationSpec =
  {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectableItems",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.ProtectableItemCollection,
      },
    },
    queryParameters: [
      Parameters.apiVersion,
      Parameters.filter,
      Parameters.take,
      Parameters.skipToken1,
    ],
    urlParameters: [
      Parameters.$host,
      Parameters.resourceGroupName,
      Parameters.subscriptionId,
      Parameters.resourceName,
      Parameters.fabricName,
      Parameters.protectionContainerName,
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectableItems/{protectableItemName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectableItem,
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
    Parameters.protectableItemName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByReplicationProtectionContainersNextOperationSpec: coreClient.OperationSpec =
  {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.ProtectableItemCollection,
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
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
