/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Metrics } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { MonitorClient } from "../monitorClient.js";
import { MetricsListOptionalParams, MetricsListResponse } from "../models/index.js";

/** Class containing Metrics operations. */
export class MetricsImpl implements Metrics {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class Metrics class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * **Lists the metric values for a resource**.
   * @param resourceUri The identifier of the resource.
   * @param options The options parameters.
   */
  list(
    resourceUri: string,
    options?: MetricsListOptionalParams
  ): Promise<MetricsListResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.Insights/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Response
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.metricnamespace,
    Parameters.timespan,
    Parameters.interval,
    Parameters.metricnames,
    Parameters.aggregation,
    Parameters.top,
    Parameters.orderby,
    Parameters.filter,
    Parameters.resultType
  ],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
