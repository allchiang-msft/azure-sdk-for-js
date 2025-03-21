/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Processes } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ServiceMap } from "../serviceMap.js";
import {
  Port,
  ProcessesListAcceptingPortsNextOptionalParams,
  ProcessesListAcceptingPortsOptionalParams,
  ProcessesListAcceptingPortsResponse,
  Connection,
  ProcessesListConnectionsNextOptionalParams,
  ProcessesListConnectionsOptionalParams,
  ProcessesListConnectionsResponse,
  ProcessesGetOptionalParams,
  ProcessesGetResponse,
  ProcessesGetLivenessOptionalParams,
  ProcessesGetLivenessResponse,
  ProcessesListAcceptingPortsNextResponse,
  ProcessesListConnectionsNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Processes operations. */
export class ProcessesImpl implements Processes {
  private readonly client: ServiceMap;

  /**
   * Initialize a new instance of the class Processes class.
   * @param client Reference to the service client
   */
  constructor(client: ServiceMap) {
    this.client = client;
  }

  /**
   * Returns a collection of ports on which this process is accepting
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param processName Process resource name.
   * @param options The options parameters.
   */
  public listAcceptingPorts(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    processName: string,
    options?: ProcessesListAcceptingPortsOptionalParams
  ): PagedAsyncIterableIterator<Port> {
    const iter = this.listAcceptingPortsPagingAll(
      resourceGroupName,
      workspaceName,
      machineName,
      processName,
      options
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
        return this.listAcceptingPortsPagingPage(
          resourceGroupName,
          workspaceName,
          machineName,
          processName,
          options,
          settings
        );
      }
    };
  }

  private async *listAcceptingPortsPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    processName: string,
    options?: ProcessesListAcceptingPortsOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Port[]> {
    let result: ProcessesListAcceptingPortsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAcceptingPorts(
        resourceGroupName,
        workspaceName,
        machineName,
        processName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAcceptingPortsNext(
        resourceGroupName,
        workspaceName,
        machineName,
        processName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAcceptingPortsPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    processName: string,
    options?: ProcessesListAcceptingPortsOptionalParams
  ): AsyncIterableIterator<Port> {
    for await (const page of this.listAcceptingPortsPagingPage(
      resourceGroupName,
      workspaceName,
      machineName,
      processName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns a collection of connections terminating or originating at the specified process
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param processName Process resource name.
   * @param options The options parameters.
   */
  public listConnections(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    processName: string,
    options?: ProcessesListConnectionsOptionalParams
  ): PagedAsyncIterableIterator<Connection> {
    const iter = this.listConnectionsPagingAll(
      resourceGroupName,
      workspaceName,
      machineName,
      processName,
      options
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
        return this.listConnectionsPagingPage(
          resourceGroupName,
          workspaceName,
          machineName,
          processName,
          options,
          settings
        );
      }
    };
  }

  private async *listConnectionsPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    processName: string,
    options?: ProcessesListConnectionsOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Connection[]> {
    let result: ProcessesListConnectionsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listConnections(
        resourceGroupName,
        workspaceName,
        machineName,
        processName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listConnectionsNext(
        resourceGroupName,
        workspaceName,
        machineName,
        processName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listConnectionsPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    processName: string,
    options?: ProcessesListConnectionsOptionalParams
  ): AsyncIterableIterator<Connection> {
    for await (const page of this.listConnectionsPagingPage(
      resourceGroupName,
      workspaceName,
      machineName,
      processName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns the specified process.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param processName Process resource name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    processName: string,
    options?: ProcessesGetOptionalParams
  ): Promise<ProcessesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, processName, options },
      getOperationSpec
    );
  }

  /**
   * Obtains the liveness status of the process during the specified time interval.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param processName Process resource name.
   * @param options The options parameters.
   */
  getLiveness(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    processName: string,
    options?: ProcessesGetLivenessOptionalParams
  ): Promise<ProcessesGetLivenessResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, processName, options },
      getLivenessOperationSpec
    );
  }

  /**
   * Returns a collection of ports on which this process is accepting
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param processName Process resource name.
   * @param options The options parameters.
   */
  private _listAcceptingPorts(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    processName: string,
    options?: ProcessesListAcceptingPortsOptionalParams
  ): Promise<ProcessesListAcceptingPortsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, processName, options },
      listAcceptingPortsOperationSpec
    );
  }

  /**
   * Returns a collection of connections terminating or originating at the specified process
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param processName Process resource name.
   * @param options The options parameters.
   */
  private _listConnections(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    processName: string,
    options?: ProcessesListConnectionsOptionalParams
  ): Promise<ProcessesListConnectionsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, processName, options },
      listConnectionsOperationSpec
    );
  }

  /**
   * ListAcceptingPortsNext
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param processName Process resource name.
   * @param nextLink The nextLink from the previous successful call to the ListAcceptingPorts method.
   * @param options The options parameters.
   */
  private _listAcceptingPortsNext(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    processName: string,
    nextLink: string,
    options?: ProcessesListAcceptingPortsNextOptionalParams
  ): Promise<ProcessesListAcceptingPortsNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        machineName,
        processName,
        nextLink,
        options
      },
      listAcceptingPortsNextOperationSpec
    );
  }

  /**
   * ListConnectionsNext
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param processName Process resource name.
   * @param nextLink The nextLink from the previous successful call to the ListConnections method.
   * @param options The options parameters.
   */
  private _listConnectionsNext(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    processName: string,
    nextLink: string,
    options?: ProcessesListConnectionsNextOptionalParams
  ): Promise<ProcessesListConnectionsNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        machineName,
        processName,
        nextLink,
        options
      },
      listConnectionsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/processes/{processName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Process
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.timestamp],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName,
    Parameters.processName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getLivenessOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/processes/{processName}/liveness",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Liveness
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startTime,
    Parameters.endTime
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName,
    Parameters.processName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAcceptingPortsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/processes/{processName}/acceptingPorts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PortCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startTime,
    Parameters.endTime
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName,
    Parameters.processName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listConnectionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/processes/{processName}/connections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startTime,
    Parameters.endTime
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName,
    Parameters.processName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAcceptingPortsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PortCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName,
    Parameters.nextLink,
    Parameters.processName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listConnectionsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName,
    Parameters.nextLink,
    Parameters.processName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
