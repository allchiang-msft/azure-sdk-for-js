/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/locationsMappers";
import * as Parameters from "../models/parameters";
import { AzureMediaServicesContext } from "../azureMediaServicesContext";

/** Class representing a Locations. */
export class Locations {
  private readonly client: AzureMediaServicesContext;

  /**
   * Create a Locations.
   * @param {AzureMediaServicesContext} client Reference to the service client.
   */
  constructor(client: AzureMediaServicesContext) {
    this.client = client;
  }

  /**
   * Checks whether the Media Service resource name is available.
   * @summary Check Name Availability
   * @param locationName The name of the location
   * @param parameters The request parameters
   * @param [options] The optional parameters
   * @returns Promise<Models.LocationsCheckNameAvailabilityResponse>
   */
  checkNameAvailability(locationName: string, parameters: Models.CheckNameAvailabilityInput, options?: msRest.RequestOptionsBase): Promise<Models.LocationsCheckNameAvailabilityResponse>;
  /**
   * @param locationName The name of the location
   * @param parameters The request parameters
   * @param callback The callback
   */
  checkNameAvailability(locationName: string, parameters: Models.CheckNameAvailabilityInput, callback: msRest.ServiceCallback<Models.EntityNameAvailabilityCheckOutput>): void;
  /**
   * @param locationName The name of the location
   * @param parameters The request parameters
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(locationName: string, parameters: Models.CheckNameAvailabilityInput, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EntityNameAvailabilityCheckOutput>): void;
  checkNameAvailability(locationName: string, parameters: Models.CheckNameAvailabilityInput, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.EntityNameAvailabilityCheckOutput>): Promise<Models.LocationsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        locationName,
        parameters,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback) as Promise<Models.LocationsCheckNameAvailabilityResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Media/locations/{locationName}/checkNameAvailability",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CheckNameAvailabilityInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EntityNameAvailabilityCheckOutput
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};
