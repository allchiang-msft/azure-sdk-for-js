/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { AccessPolicyAssignmentOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { RedisEnterpriseManagementClient } from "../redisEnterpriseManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  AccessPolicyAssignment,
  AccessPolicyAssignmentListNextOptionalParams,
  AccessPolicyAssignmentListOptionalParams,
  AccessPolicyAssignmentListResponse,
  AccessPolicyAssignmentCreateUpdateOptionalParams,
  AccessPolicyAssignmentCreateUpdateResponse,
  AccessPolicyAssignmentGetOptionalParams,
  AccessPolicyAssignmentGetResponse,
  AccessPolicyAssignmentDeleteOptionalParams,
  AccessPolicyAssignmentDeleteResponse,
  AccessPolicyAssignmentListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing AccessPolicyAssignmentOperations operations. */
export class AccessPolicyAssignmentOperationsImpl
  implements AccessPolicyAssignmentOperations
{
  private readonly client: RedisEnterpriseManagementClient;

  /**
   * Initialize a new instance of the class AccessPolicyAssignmentOperations class.
   * @param client Reference to the service client
   */
  constructor(client: RedisEnterpriseManagementClient) {
    this.client = client;
  }

  /**
   * Gets all access policy assignments..
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Redis Enterprise cluster.
   * @param databaseName The name of the Redis Enterprise database.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: AccessPolicyAssignmentListOptionalParams,
  ): PagedAsyncIterableIterator<AccessPolicyAssignment> {
    const iter = this.listPagingAll(
      resourceGroupName,
      clusterName,
      databaseName,
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
          clusterName,
          databaseName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: AccessPolicyAssignmentListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AccessPolicyAssignment[]> {
    let result: AccessPolicyAssignmentListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        clusterName,
        databaseName,
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
        clusterName,
        databaseName,
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
    clusterName: string,
    databaseName: string,
    options?: AccessPolicyAssignmentListOptionalParams,
  ): AsyncIterableIterator<AccessPolicyAssignment> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      clusterName,
      databaseName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Creates/Updates a particular access policy assignment for a database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Redis Enterprise cluster.
   * @param databaseName The name of the Redis Enterprise database.
   * @param accessPolicyAssignmentName The name of the Redis Enterprise database access policy
   *                                   assignment.
   * @param parameters Parameters supplied to the create access policy assignment for database.
   * @param options The options parameters.
   */
  async beginCreateUpdate(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    accessPolicyAssignmentName: string,
    parameters: AccessPolicyAssignment,
    options?: AccessPolicyAssignmentCreateUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AccessPolicyAssignmentCreateUpdateResponse>,
      AccessPolicyAssignmentCreateUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AccessPolicyAssignmentCreateUpdateResponse> => {
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
        clusterName,
        databaseName,
        accessPolicyAssignmentName,
        parameters,
        options,
      },
      spec: createUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      AccessPolicyAssignmentCreateUpdateResponse,
      OperationState<AccessPolicyAssignmentCreateUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "original-uri",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates/Updates a particular access policy assignment for a database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Redis Enterprise cluster.
   * @param databaseName The name of the Redis Enterprise database.
   * @param accessPolicyAssignmentName The name of the Redis Enterprise database access policy
   *                                   assignment.
   * @param parameters Parameters supplied to the create access policy assignment for database.
   * @param options The options parameters.
   */
  async beginCreateUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    accessPolicyAssignmentName: string,
    parameters: AccessPolicyAssignment,
    options?: AccessPolicyAssignmentCreateUpdateOptionalParams,
  ): Promise<AccessPolicyAssignmentCreateUpdateResponse> {
    const poller = await this.beginCreateUpdate(
      resourceGroupName,
      clusterName,
      databaseName,
      accessPolicyAssignmentName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about access policy assignment for database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Redis Enterprise cluster.
   * @param databaseName The name of the Redis Enterprise database.
   * @param accessPolicyAssignmentName The name of the Redis Enterprise database access policy
   *                                   assignment.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    accessPolicyAssignmentName: string,
    options?: AccessPolicyAssignmentGetOptionalParams,
  ): Promise<AccessPolicyAssignmentGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        accessPolicyAssignmentName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Deletes a single access policy assignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Redis Enterprise cluster.
   * @param databaseName The name of the Redis Enterprise database.
   * @param accessPolicyAssignmentName The name of the Redis Enterprise database access policy
   *                                   assignment.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    accessPolicyAssignmentName: string,
    options?: AccessPolicyAssignmentDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AccessPolicyAssignmentDeleteResponse>,
      AccessPolicyAssignmentDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AccessPolicyAssignmentDeleteResponse> => {
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
        clusterName,
        databaseName,
        accessPolicyAssignmentName,
        options,
      },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      AccessPolicyAssignmentDeleteResponse,
      OperationState<AccessPolicyAssignmentDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a single access policy assignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Redis Enterprise cluster.
   * @param databaseName The name of the Redis Enterprise database.
   * @param accessPolicyAssignmentName The name of the Redis Enterprise database access policy
   *                                   assignment.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    accessPolicyAssignmentName: string,
    options?: AccessPolicyAssignmentDeleteOptionalParams,
  ): Promise<AccessPolicyAssignmentDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      clusterName,
      databaseName,
      accessPolicyAssignmentName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets all access policy assignments..
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Redis Enterprise cluster.
   * @param databaseName The name of the Redis Enterprise database.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: AccessPolicyAssignmentListOptionalParams,
  ): Promise<AccessPolicyAssignmentListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, databaseName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Redis Enterprise cluster.
   * @param databaseName The name of the Redis Enterprise database.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    nextLink: string,
    options?: AccessPolicyAssignmentListNextOptionalParams,
  ): Promise<AccessPolicyAssignmentListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, databaseName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/accessPolicyAssignments/{accessPolicyAssignmentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AccessPolicyAssignment,
    },
    201: {
      bodyMapper: Mappers.AccessPolicyAssignment,
    },
    202: {
      bodyMapper: Mappers.AccessPolicyAssignment,
    },
    204: {
      bodyMapper: Mappers.AccessPolicyAssignment,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.accessPolicyAssignmentName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/accessPolicyAssignments/{accessPolicyAssignmentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessPolicyAssignment,
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
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.accessPolicyAssignmentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/accessPolicyAssignments/{accessPolicyAssignmentName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.AccessPolicyAssignmentDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.AccessPolicyAssignmentDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.AccessPolicyAssignmentDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.AccessPolicyAssignmentDeleteHeaders,
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
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.accessPolicyAssignmentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/accessPolicyAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessPolicyAssignmentList,
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
    Parameters.clusterName,
    Parameters.databaseName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessPolicyAssignmentList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
