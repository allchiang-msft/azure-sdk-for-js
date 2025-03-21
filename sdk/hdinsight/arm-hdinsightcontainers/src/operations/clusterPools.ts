/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ClusterPools } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { HDInsightContainersManagementClient } from "../hDInsightContainersManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  ClusterPool,
  ClusterPoolsListBySubscriptionNextOptionalParams,
  ClusterPoolsListBySubscriptionOptionalParams,
  ClusterPoolsListBySubscriptionResponse,
  ClusterPoolsListByResourceGroupNextOptionalParams,
  ClusterPoolsListByResourceGroupOptionalParams,
  ClusterPoolsListByResourceGroupResponse,
  ClusterPoolsGetOptionalParams,
  ClusterPoolsGetResponse,
  ClusterPoolsCreateOrUpdateOptionalParams,
  ClusterPoolsCreateOrUpdateResponse,
  TagsObject,
  ClusterPoolsUpdateTagsOptionalParams,
  ClusterPoolsUpdateTagsResponse,
  ClusterPoolsDeleteOptionalParams,
  ClusterPoolUpgrade,
  ClusterPoolsUpgradeOptionalParams,
  ClusterPoolsUpgradeResponse,
  ClusterPoolsListBySubscriptionNextResponse,
  ClusterPoolsListByResourceGroupNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ClusterPools operations. */
export class ClusterPoolsImpl implements ClusterPools {
  private readonly client: HDInsightContainersManagementClient;

  /**
   * Initialize a new instance of the class ClusterPools class.
   * @param client Reference to the service client
   */
  constructor(client: HDInsightContainersManagementClient) {
    this.client = client;
  }

  /**
   * Gets the list of Cluster Pools within a Subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: ClusterPoolsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<ClusterPool> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: ClusterPoolsListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ClusterPool[]> {
    let result: ClusterPoolsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: ClusterPoolsListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<ClusterPool> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists the HDInsight cluster pools under a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ClusterPoolsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<ClusterPool> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ClusterPoolsListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ClusterPool[]> {
    let result: ClusterPoolsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ClusterPoolsListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<ClusterPool> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets a cluster pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterPoolName: string,
    options?: ClusterPoolsGetOptionalParams,
  ): Promise<ClusterPoolsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterPoolName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a cluster pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterPool The Cluster Pool to create.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterPool: ClusterPool,
    options?: ClusterPoolsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClusterPoolsCreateOrUpdateResponse>,
      ClusterPoolsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ClusterPoolsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, clusterPoolName, clusterPool, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      ClusterPoolsCreateOrUpdateResponse,
      OperationState<ClusterPoolsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a cluster pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterPool The Cluster Pool to create.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterPool: ClusterPool,
    options?: ClusterPoolsCreateOrUpdateOptionalParams,
  ): Promise<ClusterPoolsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      clusterPoolName,
      clusterPool,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing Cluster Pool Tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterPoolTags Parameters supplied to update tags.
   * @param options The options parameters.
   */
  async beginUpdateTags(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterPoolTags: TagsObject,
    options?: ClusterPoolsUpdateTagsOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClusterPoolsUpdateTagsResponse>,
      ClusterPoolsUpdateTagsResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ClusterPoolsUpdateTagsResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, clusterPoolName, clusterPoolTags, options },
      spec: updateTagsOperationSpec,
    });
    const poller = await createHttpPoller<
      ClusterPoolsUpdateTagsResponse,
      OperationState<ClusterPoolsUpdateTagsResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates an existing Cluster Pool Tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterPoolTags Parameters supplied to update tags.
   * @param options The options parameters.
   */
  async beginUpdateTagsAndWait(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterPoolTags: TagsObject,
    options?: ClusterPoolsUpdateTagsOptionalParams,
  ): Promise<ClusterPoolsUpdateTagsResponse> {
    const poller = await this.beginUpdateTags(
      resourceGroupName,
      clusterPoolName,
      clusterPoolTags,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a Cluster Pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    clusterPoolName: string,
    options?: ClusterPoolsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, clusterPoolName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a Cluster Pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    clusterPoolName: string,
    options?: ClusterPoolsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      clusterPoolName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the list of Cluster Pools within a Subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: ClusterPoolsListBySubscriptionOptionalParams,
  ): Promise<ClusterPoolsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * Lists the HDInsight cluster pools under a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ClusterPoolsListByResourceGroupOptionalParams,
  ): Promise<ClusterPoolsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Upgrade a cluster pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterPoolUpgradeRequest Upgrade a cluster pool.
   * @param options The options parameters.
   */
  async beginUpgrade(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterPoolUpgradeRequest: ClusterPoolUpgrade,
    options?: ClusterPoolsUpgradeOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClusterPoolsUpgradeResponse>,
      ClusterPoolsUpgradeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ClusterPoolsUpgradeResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        clusterPoolName,
        clusterPoolUpgradeRequest,
        options,
      },
      spec: upgradeOperationSpec,
    });
    const poller = await createHttpPoller<
      ClusterPoolsUpgradeResponse,
      OperationState<ClusterPoolsUpgradeResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Upgrade a cluster pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterPoolName The name of the cluster pool.
   * @param clusterPoolUpgradeRequest Upgrade a cluster pool.
   * @param options The options parameters.
   */
  async beginUpgradeAndWait(
    resourceGroupName: string,
    clusterPoolName: string,
    clusterPoolUpgradeRequest: ClusterPoolUpgrade,
    options?: ClusterPoolsUpgradeOptionalParams,
  ): Promise<ClusterPoolsUpgradeResponse> {
    const poller = await this.beginUpgrade(
      resourceGroupName,
      clusterPoolName,
      clusterPoolUpgradeRequest,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: ClusterPoolsListBySubscriptionNextOptionalParams,
  ): Promise<ClusterPoolsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ClusterPoolsListByResourceGroupNextOptionalParams,
  ): Promise<ClusterPoolsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusterpools/{clusterPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterPool,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusterpools/{clusterPoolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterPool,
    },
    201: {
      bodyMapper: Mappers.ClusterPool,
    },
    202: {
      bodyMapper: Mappers.ClusterPool,
    },
    204: {
      bodyMapper: Mappers.ClusterPool,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.clusterPool,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterPoolName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusterpools/{clusterPoolName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterPool,
    },
    201: {
      bodyMapper: Mappers.ClusterPool,
    },
    202: {
      bodyMapper: Mappers.ClusterPool,
    },
    204: {
      bodyMapper: Mappers.ClusterPool,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.clusterPoolTags,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterPoolName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusterpools/{clusterPoolName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/clusterpools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterPoolListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusterpools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterPoolListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const upgradeOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusterpools/{clusterPoolName}/upgrade",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterPool,
    },
    201: {
      bodyMapper: Mappers.ClusterPool,
    },
    202: {
      bodyMapper: Mappers.ClusterPool,
    },
    204: {
      bodyMapper: Mappers.ClusterPool,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.clusterPoolUpgradeRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterPoolName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterPoolListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterPoolListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
