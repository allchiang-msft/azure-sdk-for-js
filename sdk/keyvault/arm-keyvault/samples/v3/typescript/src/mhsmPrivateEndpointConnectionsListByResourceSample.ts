/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { KeyVaultManagementClient } from "@azure/arm-keyvault";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The List operation gets information about the private endpoint connections associated with the managed HSM Pool.
 *
 * @summary The List operation gets information about the private endpoint connections associated with the managed HSM Pool.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/stable/2023-07-01/examples/ManagedHsm_ListPrivateEndpointConnectionsByResource.json
 */
async function listManagedHsmPoolsInASubscription(): Promise<void> {
  const subscriptionId =
    process.env["KEYVAULT_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["KEYVAULT_RESOURCE_GROUP"] || "sample-group";
  const name = "sample-mhsm";
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.mhsmPrivateEndpointConnections.listByResource(
    resourceGroupName,
    name
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  listManagedHsmPoolsInASubscription();
}

main().catch(console.error);
