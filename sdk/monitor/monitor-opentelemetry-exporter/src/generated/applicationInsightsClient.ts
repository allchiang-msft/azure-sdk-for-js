/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as Parameters from "./models/parameters.js";
import * as Mappers from "./models/mappers.js";
import {
  ApplicationInsightsClientOptionalParams,
  TelemetryItem,
  TrackOptionalParams,
  TrackOperationResponse,
} from "./models/index.js";

export class ApplicationInsightsClient extends coreClient.ServiceClient {
  host: string;

  /**
   * Initializes a new instance of the ApplicationInsightsClient class.
   * @param options The parameter options
   */
  constructor(options?: ApplicationInsightsClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: ApplicationInsightsClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
    };

    const packageDetails = `azsdk-js-monitor-opentelemetry-exporter/1.0.0-beta.28`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      endpoint: options.endpoint ?? options.baseUri ?? "{Host}/v2.1",
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.host = options.host || "https://dc.services.visualstudio.com";
  }

  /**
   * This operation sends a sequence of telemetry events that will be monitored by Azure Monitor.
   * @param body The list of telemetry events to track.
   * @param options The options parameters.
   */
  track(
    body: TelemetryItem[],
    options?: TrackOptionalParams,
  ): Promise<TrackOperationResponse> {
    return this.sendOperationRequest({ body, options }, trackOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const trackOperationSpec: coreClient.OperationSpec = {
  path: "/track",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TrackResponse,
    },
    206: {
      bodyMapper: Mappers.TrackResponse,
    },
    400: {
      bodyMapper: Mappers.TrackResponse,
      isError: true,
    },
    402: {
      bodyMapper: Mappers.TrackResponse,
      isError: true,
    },
    429: {
      bodyMapper: Mappers.TrackResponse,
      isError: true,
    },
    500: {
      bodyMapper: Mappers.TrackResponse,
      isError: true,
    },
    503: {
      bodyMapper: Mappers.TrackResponse,
      isError: true,
    },
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
