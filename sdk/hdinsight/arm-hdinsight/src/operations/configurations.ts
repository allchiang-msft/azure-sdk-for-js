/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Configurations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { HDInsightManagementClient } from "../hDInsightManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  ConfigurationsListOptionalParams,
  ConfigurationsListResponse,
  ConfigurationsUpdateOptionalParams,
  ConfigurationsGetOptionalParams,
  ConfigurationsGetResponse,
} from "../models/index.js";

/** Class containing Configurations operations. */
export class ConfigurationsImpl implements Configurations {
  private readonly client: HDInsightManagementClient;

  /**
   * Initialize a new instance of the class Configurations class.
   * @param client Reference to the service client
   */
  constructor(client: HDInsightManagementClient) {
    this.client = client;
  }

  /**
   * Gets all configuration information for an HDI cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    clusterName: string,
    options?: ConfigurationsListOptionalParams,
  ): Promise<ConfigurationsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      listOperationSpec,
    );
  }

  /**
   * Configures the HTTP settings on the specified cluster. This API is deprecated, please use
   * UpdateGatewaySettings in cluster endpoint instead.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param configurationName The name of the cluster configuration.
   * @param parameters The cluster configurations.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    clusterName: string,
    configurationName: string,
    parameters: { [propertyName: string]: string },
    options?: ConfigurationsUpdateOptionalParams,
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
        clusterName,
        configurationName,
        parameters,
        options,
      },
      spec: updateOperationSpec,
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
   * Configures the HTTP settings on the specified cluster. This API is deprecated, please use
   * UpdateGatewaySettings in cluster endpoint instead.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param configurationName The name of the cluster configuration.
   * @param parameters The cluster configurations.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    configurationName: string,
    parameters: { [propertyName: string]: string },
    options?: ConfigurationsUpdateOptionalParams,
  ): Promise<void> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      clusterName,
      configurationName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * The configuration object for the specified cluster. This API is not recommended and might be removed
   * in the future. Please consider using List configurations API instead.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param configurationName The name of the cluster configuration.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    configurationName: string,
    options?: ConfigurationsGetOptionalParams,
  ): Promise<ConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, configurationName, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/configurations",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterConfigurations,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/configurations/{configurationName}",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.configurationName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/configurations/{configurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "String" } } },
      },
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
    Parameters.configurationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
