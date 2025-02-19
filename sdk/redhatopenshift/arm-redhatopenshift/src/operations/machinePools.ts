/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { MachinePools } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureRedHatOpenShiftClient } from "../azureRedHatOpenShiftClient.js";
import {
  MachinePool,
  MachinePoolsListNextOptionalParams,
  MachinePoolsListOptionalParams,
  MachinePoolsListResponse,
  MachinePoolsGetOptionalParams,
  MachinePoolsGetResponse,
  MachinePoolsCreateOrUpdateOptionalParams,
  MachinePoolsCreateOrUpdateResponse,
  MachinePoolsDeleteOptionalParams,
  MachinePoolUpdate,
  MachinePoolsUpdateOptionalParams,
  MachinePoolsUpdateResponse,
  MachinePoolsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing MachinePools operations. */
export class MachinePoolsImpl implements MachinePools {
  private readonly client: AzureRedHatOpenShiftClient;

  /**
   * Initialize a new instance of the class MachinePools class.
   * @param client Reference to the service client
   */
  constructor(client: AzureRedHatOpenShiftClient) {
    this.client = client;
  }

  /**
   * The operation returns properties of each MachinePool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the OpenShift cluster resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    resourceName: string,
    options?: MachinePoolsListOptionalParams,
  ): PagedAsyncIterableIterator<MachinePool> {
    const iter = this.listPagingAll(resourceGroupName, resourceName, options);
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
          resourceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: MachinePoolsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<MachinePool[]> {
    let result: MachinePoolsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, resourceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        resourceName,
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
    resourceName: string,
    options?: MachinePoolsListOptionalParams,
  ): AsyncIterableIterator<MachinePool> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      resourceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * The operation returns properties of each MachinePool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the OpenShift cluster resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    resourceName: string,
    options?: MachinePoolsListOptionalParams,
  ): Promise<MachinePoolsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listOperationSpec,
    );
  }

  /**
   * The operation returns properties of a MachinePool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the OpenShift cluster resource.
   * @param childResourceName The name of the MachinePool resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    childResourceName: string,
    options?: MachinePoolsGetOptionalParams,
  ): Promise<MachinePoolsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, childResourceName, options },
      getOperationSpec,
    );
  }

  /**
   * The operation returns properties of a MachinePool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the OpenShift cluster resource.
   * @param childResourceName The name of the MachinePool resource.
   * @param parameters The MachinePool resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    childResourceName: string,
    parameters: MachinePool,
    options?: MachinePoolsCreateOrUpdateOptionalParams,
  ): Promise<MachinePoolsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        childResourceName,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * The operation returns nothing.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the OpenShift cluster resource.
   * @param childResourceName The name of the MachinePool resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    childResourceName: string,
    options?: MachinePoolsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, childResourceName, options },
      deleteOperationSpec,
    );
  }

  /**
   * The operation returns properties of a MachinePool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the OpenShift cluster resource.
   * @param childResourceName The name of the MachinePool resource.
   * @param parameters The MachinePool resource.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    resourceName: string,
    childResourceName: string,
    parameters: MachinePoolUpdate,
    options?: MachinePoolsUpdateOptionalParams,
  ): Promise<MachinePoolsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        childResourceName,
        parameters,
        options,
      },
      updateOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the OpenShift cluster resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    resourceName: string,
    nextLink: string,
    options?: MachinePoolsListNextOptionalParams,
  ): Promise<MachinePoolsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RedHatOpenShift/openShiftCluster/{resourceName}/machinePools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachinePoolList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RedHatOpenShift/openshiftclusters/{resourceName}/machinePool/{childResourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachinePool,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName1,
    Parameters.childResourceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RedHatOpenShift/openshiftclusters/{resourceName}/machinePool/{childResourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.MachinePool,
    },
    201: {
      bodyMapper: Mappers.MachinePool,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName1,
    Parameters.childResourceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RedHatOpenShift/openshiftclusters/{resourceName}/machinePool/{childResourceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName1,
    Parameters.childResourceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RedHatOpenShift/openshiftclusters/{resourceName}/machinePool/{childResourceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.MachinePool,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName1,
    Parameters.childResourceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachinePoolList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
