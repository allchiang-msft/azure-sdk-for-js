/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ContainerRegistries } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AppPlatformManagementClient } from "../appPlatformManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  ContainerRegistryResource,
  ContainerRegistriesListNextOptionalParams,
  ContainerRegistriesListOptionalParams,
  ContainerRegistriesListResponse,
  ContainerRegistriesGetOptionalParams,
  ContainerRegistriesGetResponse,
  ContainerRegistriesCreateOrUpdateOptionalParams,
  ContainerRegistriesCreateOrUpdateResponse,
  ContainerRegistriesDeleteOptionalParams,
  ContainerRegistriesDeleteResponse,
  ContainerRegistryProperties,
  ContainerRegistriesValidateOptionalParams,
  ContainerRegistriesValidateResponse,
  ContainerRegistriesListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ContainerRegistries operations. */
export class ContainerRegistriesImpl implements ContainerRegistries {
  private readonly client: AppPlatformManagementClient;

  /**
   * Initialize a new instance of the class ContainerRegistries class.
   * @param client Reference to the service client
   */
  constructor(client: AppPlatformManagementClient) {
    this.client = client;
  }

  /**
   * List container registries resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    options?: ContainerRegistriesListOptionalParams
  ): PagedAsyncIterableIterator<ContainerRegistryResource> {
    const iter = this.listPagingAll(resourceGroupName, serviceName, options);
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
          serviceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    options?: ContainerRegistriesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ContainerRegistryResource[]> {
    let result: ContainerRegistriesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, serviceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        serviceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    serviceName: string,
    options?: ContainerRegistriesListOptionalParams
  ): AsyncIterableIterator<ContainerRegistryResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List container registries resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    options?: ContainerRegistriesListOptionalParams
  ): Promise<ContainerRegistriesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listOperationSpec
    );
  }

  /**
   * Get the container registries resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param containerRegistryName The name of the container registry.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    containerRegistryName: string,
    options?: ContainerRegistriesGetOptionalParams
  ): Promise<ContainerRegistriesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, containerRegistryName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update container registry resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param containerRegistryName The name of the container registry.
   * @param containerRegistryResource Parameters for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    containerRegistryName: string,
    containerRegistryResource: ContainerRegistryResource,
    options?: ContainerRegistriesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ContainerRegistriesCreateOrUpdateResponse>,
      ContainerRegistriesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ContainerRegistriesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        serviceName,
        containerRegistryName,
        containerRegistryResource,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      ContainerRegistriesCreateOrUpdateResponse,
      OperationState<ContainerRegistriesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update container registry resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param containerRegistryName The name of the container registry.
   * @param containerRegistryResource Parameters for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    containerRegistryName: string,
    containerRegistryResource: ContainerRegistryResource,
    options?: ContainerRegistriesCreateOrUpdateOptionalParams
  ): Promise<ContainerRegistriesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serviceName,
      containerRegistryName,
      containerRegistryResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a container registry resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param containerRegistryName The name of the container registry.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    serviceName: string,
    containerRegistryName: string,
    options?: ContainerRegistriesDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ContainerRegistriesDeleteResponse>,
      ContainerRegistriesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ContainerRegistriesDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, serviceName, containerRegistryName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      ContainerRegistriesDeleteResponse,
      OperationState<ContainerRegistriesDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a container registry resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param containerRegistryName The name of the container registry.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    containerRegistryName: string,
    options?: ContainerRegistriesDeleteOptionalParams
  ): Promise<ContainerRegistriesDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      serviceName,
      containerRegistryName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Check if the container registry properties are valid.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param containerRegistryName The name of the container registry.
   * @param containerRegistryProperties Parameters for the validate operation
   * @param options The options parameters.
   */
  async beginValidate(
    resourceGroupName: string,
    serviceName: string,
    containerRegistryName: string,
    containerRegistryProperties: ContainerRegistryProperties,
    options?: ContainerRegistriesValidateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ContainerRegistriesValidateResponse>,
      ContainerRegistriesValidateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ContainerRegistriesValidateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        serviceName,
        containerRegistryName,
        containerRegistryProperties,
        options
      },
      spec: validateOperationSpec
    });
    const poller = await createHttpPoller<
      ContainerRegistriesValidateResponse,
      OperationState<ContainerRegistriesValidateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Check if the container registry properties are valid.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param containerRegistryName The name of the container registry.
   * @param containerRegistryProperties Parameters for the validate operation
   * @param options The options parameters.
   */
  async beginValidateAndWait(
    resourceGroupName: string,
    serviceName: string,
    containerRegistryName: string,
    containerRegistryProperties: ContainerRegistryProperties,
    options?: ContainerRegistriesValidateOptionalParams
  ): Promise<ContainerRegistriesValidateResponse> {
    const poller = await this.beginValidate(
      resourceGroupName,
      serviceName,
      containerRegistryName,
      containerRegistryProperties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: ContainerRegistriesListNextOptionalParams
  ): Promise<ContainerRegistriesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/containerRegistries",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerRegistryResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/containerRegistries/{containerRegistryName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerRegistryResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.containerRegistryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/containerRegistries/{containerRegistryName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerRegistryResource
    },
    201: {
      bodyMapper: Mappers.ContainerRegistryResource
    },
    202: {
      bodyMapper: Mappers.ContainerRegistryResource
    },
    204: {
      bodyMapper: Mappers.ContainerRegistryResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.containerRegistryResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.containerRegistryName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/containerRegistries/{containerRegistryName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.ContainerRegistriesDeleteHeaders
    },
    201: {
      headersMapper: Mappers.ContainerRegistriesDeleteHeaders
    },
    202: {
      headersMapper: Mappers.ContainerRegistriesDeleteHeaders
    },
    204: {
      headersMapper: Mappers.ContainerRegistriesDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.containerRegistryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const validateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/containerRegistries/{containerRegistryName}/validate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerRegistryValidateResult
    },
    201: {
      bodyMapper: Mappers.ContainerRegistryValidateResult
    },
    202: {
      bodyMapper: Mappers.ContainerRegistryValidateResult
    },
    204: {
      bodyMapper: Mappers.ContainerRegistryValidateResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.containerRegistryProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.containerRegistryName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerRegistryResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
