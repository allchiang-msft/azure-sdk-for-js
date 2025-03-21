/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { PrivateLinkScopes } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { HybridComputeManagementClient } from "../hybridComputeManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  HybridComputePrivateLinkScope,
  PrivateLinkScopesListNextOptionalParams,
  PrivateLinkScopesListOptionalParams,
  PrivateLinkScopesListResponse,
  PrivateLinkScopesListByResourceGroupNextOptionalParams,
  PrivateLinkScopesListByResourceGroupOptionalParams,
  PrivateLinkScopesListByResourceGroupResponse,
  PrivateLinkScopesDeleteOptionalParams,
  PrivateLinkScopesGetOptionalParams,
  PrivateLinkScopesGetResponse,
  PrivateLinkScopesCreateOrUpdateOptionalParams,
  PrivateLinkScopesCreateOrUpdateResponse,
  TagsResource,
  PrivateLinkScopesUpdateTagsOptionalParams,
  PrivateLinkScopesUpdateTagsResponse,
  PrivateLinkScopesGetValidationDetailsOptionalParams,
  PrivateLinkScopesGetValidationDetailsResponse,
  PrivateLinkScopesGetValidationDetailsForMachineOptionalParams,
  PrivateLinkScopesGetValidationDetailsForMachineResponse,
  PrivateLinkScopesListNextResponse,
  PrivateLinkScopesListByResourceGroupNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateLinkScopes operations. */
export class PrivateLinkScopesImpl implements PrivateLinkScopes {
  private readonly client: HybridComputeManagementClient;

  /**
   * Initialize a new instance of the class PrivateLinkScopes class.
   * @param client Reference to the service client
   */
  constructor(client: HybridComputeManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of all Azure Arc PrivateLinkScopes within a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: PrivateLinkScopesListOptionalParams,
  ): PagedAsyncIterableIterator<HybridComputePrivateLinkScope> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: PrivateLinkScopesListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<HybridComputePrivateLinkScope[]> {
    let result: PrivateLinkScopesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: PrivateLinkScopesListOptionalParams,
  ): AsyncIterableIterator<HybridComputePrivateLinkScope> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of Azure Arc PrivateLinkScopes within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: PrivateLinkScopesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<HybridComputePrivateLinkScope> {
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
    options?: PrivateLinkScopesListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<HybridComputePrivateLinkScope[]> {
    let result: PrivateLinkScopesListByResourceGroupResponse;
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
    options?: PrivateLinkScopesListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<HybridComputePrivateLinkScope> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of all Azure Arc PrivateLinkScopes within a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: PrivateLinkScopesListOptionalParams,
  ): Promise<PrivateLinkScopesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets a list of Azure Arc PrivateLinkScopes within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: PrivateLinkScopesListByResourceGroupOptionalParams,
  ): Promise<PrivateLinkScopesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Deletes a Azure Arc PrivateLinkScope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    scopeName: string,
    options?: PrivateLinkScopesDeleteOptionalParams,
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
      args: { resourceGroupName, scopeName, options },
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
   * Deletes a Azure Arc PrivateLinkScope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    scopeName: string,
    options?: PrivateLinkScopesDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      scopeName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns a Azure Arc PrivateLinkScope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    scopeName: string,
    options?: PrivateLinkScopesGetOptionalParams,
  ): Promise<PrivateLinkScopesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, scopeName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates (or updates) a Azure Arc PrivateLinkScope. Note: You cannot specify a different value for
   * InstrumentationKey nor AppId in the Put operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param parameters Properties that need to be specified to create or update a Azure Arc for Servers
   *                   and Clusters PrivateLinkScope.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    scopeName: string,
    parameters: HybridComputePrivateLinkScope,
    options?: PrivateLinkScopesCreateOrUpdateOptionalParams,
  ): Promise<PrivateLinkScopesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, scopeName, parameters, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Updates an existing PrivateLinkScope's tags. To update other fields use the CreateOrUpdate method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateLinkScopeTags Updated tag information to set into the PrivateLinkScope instance.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    scopeName: string,
    privateLinkScopeTags: TagsResource,
    options?: PrivateLinkScopesUpdateTagsOptionalParams,
  ): Promise<PrivateLinkScopesUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, scopeName, privateLinkScopeTags, options },
      updateTagsOperationSpec,
    );
  }

  /**
   * Returns a Azure Arc PrivateLinkScope's validation details.
   * @param location The location of the target resource.
   * @param privateLinkScopeId The id (Guid) of the Azure Arc PrivateLinkScope resource.
   * @param options The options parameters.
   */
  getValidationDetails(
    location: string,
    privateLinkScopeId: string,
    options?: PrivateLinkScopesGetValidationDetailsOptionalParams,
  ): Promise<PrivateLinkScopesGetValidationDetailsResponse> {
    return this.client.sendOperationRequest(
      { location, privateLinkScopeId, options },
      getValidationDetailsOperationSpec,
    );
  }

  /**
   * Returns a Azure Arc PrivateLinkScope's validation details for a given machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the target machine to get the private link scope validation details
   *                    for.
   * @param options The options parameters.
   */
  getValidationDetailsForMachine(
    resourceGroupName: string,
    machineName: string,
    options?: PrivateLinkScopesGetValidationDetailsForMachineOptionalParams,
  ): Promise<PrivateLinkScopesGetValidationDetailsForMachineResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, machineName, options },
      getValidationDetailsForMachineOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: PrivateLinkScopesListNextOptionalParams,
  ): Promise<PrivateLinkScopesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
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
    options?: PrivateLinkScopesListByResourceGroupNextOptionalParams,
  ): Promise<PrivateLinkScopesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/privateLinkScopes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HybridComputePrivateLinkScopeListResult,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HybridComputePrivateLinkScopeListResult,
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
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}",
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
    Parameters.scopeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HybridComputePrivateLinkScope,
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
    Parameters.scopeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.HybridComputePrivateLinkScope,
    },
    201: {
      bodyMapper: Mappers.HybridComputePrivateLinkScope,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scopeName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.HybridComputePrivateLinkScope,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.privateLinkScopeTags,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scopeName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const getValidationDetailsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/locations/{location}/privateLinkScopes/{privateLinkScopeId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkScopeValidationDetails,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location1,
    Parameters.privateLinkScopeId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getValidationDetailsForMachineOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/privateLinkScopes/current",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkScopeValidationDetails,
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
    Parameters.machineName2,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HybridComputePrivateLinkScopeListResult,
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
      bodyMapper: Mappers.HybridComputePrivateLinkScopeListResult,
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
