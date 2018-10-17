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
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/triggersMappers";
import * as Parameters from "../models/parameters";
import { DataFactoryManagementClientContext } from "../dataFactoryManagementClientContext";

/** Class representing a Triggers. */
export class Triggers {
  private readonly client: DataFactoryManagementClientContext;

  /**
   * Create a Triggers.
   * @param {DataFactoryManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataFactoryManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists triggers.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TriggersListByFactoryResponse>
   */
  listByFactory(resourceGroupName: string, factoryName: string, options?: msRest.RequestOptionsBase): Promise<Models.TriggersListByFactoryResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param callback The callback
   */
  listByFactory(resourceGroupName: string, factoryName: string, callback: msRest.ServiceCallback<Models.TriggerListResponse>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByFactory(resourceGroupName: string, factoryName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TriggerListResponse>): void;
  listByFactory(resourceGroupName: string, factoryName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.TriggerListResponse>): Promise<Models.TriggersListByFactoryResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        options
      },
      listByFactoryOperationSpec,
      callback) as Promise<Models.TriggersListByFactoryResponse>;
  }

  /**
   * Creates or updates a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param trigger Trigger resource definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.TriggersCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, factoryName: string, triggerName: string, trigger: Models.TriggerResource, options?: Models.TriggersCreateOrUpdateOptionalParams): Promise<Models.TriggersCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param trigger Trigger resource definition.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, factoryName: string, triggerName: string, trigger: Models.TriggerResource, callback: msRest.ServiceCallback<Models.TriggerResource>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param trigger Trigger resource definition.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, factoryName: string, triggerName: string, trigger: Models.TriggerResource, options: Models.TriggersCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.TriggerResource>): void;
  createOrUpdate(resourceGroupName: string, factoryName: string, triggerName: string, trigger: Models.TriggerResource, options?: Models.TriggersCreateOrUpdateOptionalParams, callback?: msRest.ServiceCallback<Models.TriggerResource>): Promise<Models.TriggersCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        triggerName,
        trigger,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.TriggersCreateOrUpdateResponse>;
  }

  /**
   * Gets a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TriggersGetResponse>
   */
  get(resourceGroupName: string, factoryName: string, triggerName: string, options?: Models.TriggersGetOptionalParams): Promise<Models.TriggersGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param callback The callback
   */
  get(resourceGroupName: string, factoryName: string, triggerName: string, callback: msRest.ServiceCallback<Models.TriggerResource>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, factoryName: string, triggerName: string, options: Models.TriggersGetOptionalParams, callback: msRest.ServiceCallback<Models.TriggerResource>): void;
  get(resourceGroupName: string, factoryName: string, triggerName: string, options?: Models.TriggersGetOptionalParams, callback?: msRest.ServiceCallback<Models.TriggerResource>): Promise<Models.TriggersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        triggerName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TriggersGetResponse>;
  }

  /**
   * Deletes a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, factoryName: string, triggerName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, factoryName: string, triggerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        triggerName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Starts a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  start(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStart(resourceGroupName,factoryName,triggerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Stops a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stop(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStop(resourceGroupName,factoryName,triggerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Starts a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStart(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        factoryName,
        triggerName,
        options
      },
      beginStartOperationSpec,
      options);
  }

  /**
   * Stops a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStop(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        factoryName,
        triggerName,
        options
      },
      beginStopOperationSpec,
      options);
  }

  /**
   * Lists triggers.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TriggersListByFactoryNextResponse>
   */
  listByFactoryNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.TriggersListByFactoryNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByFactoryNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.TriggerListResponse>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByFactoryNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TriggerListResponse>): void;
  listByFactoryNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.TriggerListResponse>): Promise<Models.TriggersListByFactoryNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByFactoryNextOperationSpec,
      callback) as Promise<Models.TriggersListByFactoryNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByFactoryOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TriggerListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "trigger",
    mapper: {
      ...Mappers.TriggerResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.TriggerResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TriggerResource
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/start",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/stop",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByFactoryNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TriggerListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
