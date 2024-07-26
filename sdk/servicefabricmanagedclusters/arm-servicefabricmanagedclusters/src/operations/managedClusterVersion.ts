/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ManagedClusterVersion } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ServiceFabricManagedClustersManagementClient } from "../serviceFabricManagedClustersManagementClient";
import {
  ManagedClusterVersionGetOptionalParams,
  ManagedClusterVersionGetResponse,
  ManagedClusterVersionEnvironment,
  ManagedClusterVersionGetByEnvironmentOptionalParams,
  ManagedClusterVersionGetByEnvironmentResponse,
  ManagedClusterVersionListOptionalParams,
  ManagedClusterVersionListResponse,
  ManagedClusterVersionListByEnvironmentOptionalParams,
  ManagedClusterVersionListByEnvironmentResponse,
} from "../models";

/** Class containing ManagedClusterVersion operations. */
export class ManagedClusterVersionImpl implements ManagedClusterVersion {
  private readonly client: ServiceFabricManagedClustersManagementClient;

  /**
   * Initialize a new instance of the class ManagedClusterVersion class.
   * @param client Reference to the service client
   */
  constructor(client: ServiceFabricManagedClustersManagementClient) {
    this.client = client;
  }

  /**
   * Gets information about an available Service Fabric managed cluster code version.
   * @param location The location for the cluster code versions. This is different from cluster location.
   * @param clusterVersion The cluster code version.
   * @param options The options parameters.
   */
  get(
    location: string,
    clusterVersion: string,
    options?: ManagedClusterVersionGetOptionalParams,
  ): Promise<ManagedClusterVersionGetResponse> {
    return this.client.sendOperationRequest(
      { location, clusterVersion, options },
      getOperationSpec,
    );
  }

  /**
   * Gets information about an available Service Fabric cluster code version by environment.
   * @param location The location for the cluster code versions. This is different from cluster location.
   * @param environment The operating system of the cluster. The default means all.
   * @param clusterVersion The cluster code version.
   * @param options The options parameters.
   */
  getByEnvironment(
    location: string,
    environment: ManagedClusterVersionEnvironment,
    clusterVersion: string,
    options?: ManagedClusterVersionGetByEnvironmentOptionalParams,
  ): Promise<ManagedClusterVersionGetByEnvironmentResponse> {
    return this.client.sendOperationRequest(
      { location, environment, clusterVersion, options },
      getByEnvironmentOperationSpec,
    );
  }

  /**
   * Gets all available code versions for Service Fabric cluster resources by location.
   * @param location The location for the cluster code versions. This is different from cluster location.
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: ManagedClusterVersionListOptionalParams,
  ): Promise<ManagedClusterVersionListResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listOperationSpec,
    );
  }

  /**
   * Gets all available code versions for Service Fabric cluster resources by environment.
   * @param location The location for the cluster code versions. This is different from cluster location.
   * @param environment The operating system of the cluster. The default means all.
   * @param options The options parameters.
   */
  listByEnvironment(
    location: string,
    environment: ManagedClusterVersionEnvironment,
    options?: ManagedClusterVersionListByEnvironmentOptionalParams,
  ): Promise<ManagedClusterVersionListByEnvironmentResponse> {
    return this.client.sendOperationRequest(
      { location, environment, options },
      listByEnvironmentOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedClusterVersions/{clusterVersion}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedClusterCodeVersionResult,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.clusterVersion,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getByEnvironmentOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/managedClusterVersions/{clusterVersion}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedClusterCodeVersionResult,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.clusterVersion,
    Parameters.environment,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedClusterVersions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManagedClusterCodeVersionResult",
            },
          },
        },
      },
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByEnvironmentOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/managedClusterVersions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManagedClusterCodeVersionResult",
            },
          },
        },
      },
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.environment,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
