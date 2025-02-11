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
 * This sample demonstrates how to Deletes the specified private endpoint connection associated with the managed hsm pool.
 *
 * @summary Deletes the specified private endpoint connection associated with the managed hsm pool.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/stable/2023-07-01/examples/ManagedHsm_deletePrivateEndpointConnection.json
 */
async function managedHsmDeletePrivateEndpointConnection(): Promise<void> {
  const subscriptionId =
    process.env["KEYVAULT_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["KEYVAULT_RESOURCE_GROUP"] || "sample-group";
  const name = "sample-mhsm";
  const privateEndpointConnectionName = "sample-pec";
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const result = await client.mhsmPrivateEndpointConnections.beginDeleteAndWait(
    resourceGroupName,
    name,
    privateEndpointConnectionName
  );
  console.log(result);
}

async function main(): Promise<void> {
  managedHsmDeletePrivateEndpointConnection();
}

main().catch(console.error);
