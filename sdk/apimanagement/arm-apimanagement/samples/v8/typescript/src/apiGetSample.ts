/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the details of the API specified by its identifier.
 *
 * @summary Gets the details of the API specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementGetApiContract.json
 */
async function apiManagementGetApiContract() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "57d1f7558aa04f15146d9d8a";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.get(resourceGroupName, serviceName, apiId);
  console.log(result);
}

apiManagementGetApiContract().catch(console.error);

/**
 * This sample demonstrates how to Gets the details of the API specified by its identifier.
 *
 * @summary Gets the details of the API specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementGetApiRevision.json
 */
async function apiManagementGetApiRevisionContract() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "echo-api;rev=3";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.get(resourceGroupName, serviceName, apiId);
  console.log(result);
}

apiManagementGetApiRevisionContract().catch(console.error);