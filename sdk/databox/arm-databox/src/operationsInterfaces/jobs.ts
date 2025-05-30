/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  JobResource,
  JobsListOptionalParams,
  JobsListByResourceGroupOptionalParams,
  UnencryptedCredentials,
  JobsListCredentialsOptionalParams,
  MarkDevicesShippedRequest,
  JobsMarkDevicesShippedOptionalParams,
  JobsGetOptionalParams,
  JobsGetResponse,
  JobsCreateOptionalParams,
  JobsCreateResponse,
  JobsDeleteOptionalParams,
  JobResourceUpdateParameter,
  JobsUpdateOptionalParams,
  JobsUpdateResponse,
  ShipmentPickUpRequest,
  JobsBookShipmentPickUpOptionalParams,
  JobsBookShipmentPickUpResponse,
  CancellationReason,
  JobsCancelOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Jobs. */
export interface Jobs {
  /**
   * Lists all the jobs available under the subscription.
   * @param options The options parameters.
   */
  list(
    options?: JobsListOptionalParams,
  ): PagedAsyncIterableIterator<JobResource>;
  /**
   * Lists all the jobs available under the given resource group.
   * @param resourceGroupName The Resource Group Name
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: JobsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<JobResource>;
  /**
   * This method gets the unencrypted secrets related to the job.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param options The options parameters.
   */
  listCredentials(
    resourceGroupName: string,
    jobName: string,
    options?: JobsListCredentialsOptionalParams,
  ): PagedAsyncIterableIterator<UnencryptedCredentials>;
  /**
   * Request to mark devices for a given job as shipped
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param resourceGroupName The Resource Group Name
   * @param markDevicesShippedRequest Mark Devices Shipped Request
   * @param options The options parameters.
   */
  markDevicesShipped(
    jobName: string,
    resourceGroupName: string,
    markDevicesShippedRequest: MarkDevicesShippedRequest,
    options?: JobsMarkDevicesShippedOptionalParams,
  ): Promise<void>;
  /**
   * Gets information about the specified job.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    jobName: string,
    options?: JobsGetOptionalParams,
  ): Promise<JobsGetResponse>;
  /**
   * Creates a new job with the specified parameters. Existing job cannot be updated with this API and
   * should instead be updated with the Update job API.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param jobResource Job details from request body.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    jobName: string,
    jobResource: JobResource,
    options?: JobsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<JobsCreateResponse>, JobsCreateResponse>
  >;
  /**
   * Creates a new job with the specified parameters. Existing job cannot be updated with this API and
   * should instead be updated with the Update job API.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param jobResource Job details from request body.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    jobName: string,
    jobResource: JobResource,
    options?: JobsCreateOptionalParams,
  ): Promise<JobsCreateResponse>;
  /**
   * Deletes a job.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    jobName: string,
    options?: JobsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a job.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    jobName: string,
    options?: JobsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Updates the properties of an existing job.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param jobResourceUpdateParameter Job update parameters from request body.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    jobName: string,
    jobResourceUpdateParameter: JobResourceUpdateParameter,
    options?: JobsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<JobsUpdateResponse>, JobsUpdateResponse>
  >;
  /**
   * Updates the properties of an existing job.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param jobResourceUpdateParameter Job update parameters from request body.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    jobName: string,
    jobResourceUpdateParameter: JobResourceUpdateParameter,
    options?: JobsUpdateOptionalParams,
  ): Promise<JobsUpdateResponse>;
  /**
   * Book shipment pick up.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param shipmentPickUpRequest Details of shipment pick up request.
   * @param options The options parameters.
   */
  bookShipmentPickUp(
    resourceGroupName: string,
    jobName: string,
    shipmentPickUpRequest: ShipmentPickUpRequest,
    options?: JobsBookShipmentPickUpOptionalParams,
  ): Promise<JobsBookShipmentPickUpResponse>;
  /**
   * CancelJob.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param cancellationReason Reason for cancellation.
   * @param options The options parameters.
   */
  cancel(
    resourceGroupName: string,
    jobName: string,
    cancellationReason: CancellationReason,
    options?: JobsCancelOptionalParams,
  ): Promise<void>;
}
