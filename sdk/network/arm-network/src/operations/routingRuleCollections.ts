/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { RoutingRuleCollections } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { NetworkManagementClient } from "../networkManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  RoutingRuleCollection,
  RoutingRuleCollectionsListNextOptionalParams,
  RoutingRuleCollectionsListOptionalParams,
  RoutingRuleCollectionsListResponse,
  RoutingRuleCollectionsGetOptionalParams,
  RoutingRuleCollectionsGetResponse,
  RoutingRuleCollectionsCreateOrUpdateOptionalParams,
  RoutingRuleCollectionsCreateOrUpdateResponse,
  RoutingRuleCollectionsDeleteOptionalParams,
  RoutingRuleCollectionsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing RoutingRuleCollections operations. */
export class RoutingRuleCollectionsImpl implements RoutingRuleCollections {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class RoutingRuleCollections class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the rule collections in a routing configuration, in a paginated format.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Routing Configuration.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    options?: RoutingRuleCollectionsListOptionalParams,
  ): PagedAsyncIterableIterator<RoutingRuleCollection> {
    const iter = this.listPagingAll(
      resourceGroupName,
      networkManagerName,
      configurationName,
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
        return this.listPagingPage(
          resourceGroupName,
          networkManagerName,
          configurationName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    options?: RoutingRuleCollectionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<RoutingRuleCollection[]> {
    let result: RoutingRuleCollectionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        networkManagerName,
        configurationName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        networkManagerName,
        configurationName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    options?: RoutingRuleCollectionsListOptionalParams,
  ): AsyncIterableIterator<RoutingRuleCollection> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      networkManagerName,
      configurationName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the rule collections in a routing configuration, in a paginated format.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Routing Configuration.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    options?: RoutingRuleCollectionsListOptionalParams,
  ): Promise<RoutingRuleCollectionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkManagerName, configurationName, options },
      listOperationSpec,
    );
  }

  /**
   * Gets a network manager routing configuration rule collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Routing Configuration.
   * @param ruleCollectionName The name of the network manager routing Configuration rule collection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    ruleCollectionName: string,
    options?: RoutingRuleCollectionsGetOptionalParams,
  ): Promise<RoutingRuleCollectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkManagerName,
        configurationName,
        ruleCollectionName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a routing rule collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Routing Configuration.
   * @param ruleCollectionName The name of the network manager routing Configuration rule collection.
   * @param ruleCollection The Rule Collection to create or update
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    ruleCollectionName: string,
    ruleCollection: RoutingRuleCollection,
    options?: RoutingRuleCollectionsCreateOrUpdateOptionalParams,
  ): Promise<RoutingRuleCollectionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkManagerName,
        configurationName,
        ruleCollectionName,
        ruleCollection,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes an routing rule collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Routing Configuration.
   * @param ruleCollectionName The name of the network manager routing Configuration rule collection.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    ruleCollectionName: string,
    options?: RoutingRuleCollectionsDeleteOptionalParams,
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
      args: {
        resourceGroupName,
        networkManagerName,
        configurationName,
        ruleCollectionName,
        options,
      },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an routing rule collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Routing Configuration.
   * @param ruleCollectionName The name of the network manager routing Configuration rule collection.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    ruleCollectionName: string,
    options?: RoutingRuleCollectionsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      networkManagerName,
      configurationName,
      ruleCollectionName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Routing Configuration.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    nextLink: string,
    options?: RoutingRuleCollectionsListNextOptionalParams,
  ): Promise<RoutingRuleCollectionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkManagerName,
        configurationName,
        nextLink,
        options,
      },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/routingConfigurations/{configurationName}/ruleCollections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoutingRuleCollectionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.skipToken1,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.networkManagerName2,
    Parameters.configurationName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/routingConfigurations/{configurationName}/ruleCollections/{ruleCollectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoutingRuleCollection,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.networkManagerName2,
    Parameters.configurationName1,
    Parameters.ruleCollectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/routingConfigurations/{configurationName}/ruleCollections/{ruleCollectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RoutingRuleCollection,
    },
    201: {
      bodyMapper: Mappers.RoutingRuleCollection,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.ruleCollection,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.networkManagerName2,
    Parameters.configurationName1,
    Parameters.ruleCollectionName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/routingConfigurations/{configurationName}/ruleCollections/{ruleCollectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.force],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.networkManagerName2,
    Parameters.configurationName1,
    Parameters.ruleCollectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoutingRuleCollectionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName1,
    Parameters.networkManagerName2,
    Parameters.configurationName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
