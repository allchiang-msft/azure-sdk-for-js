/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ProtectedItemModel,
  ProtectedItemCreateOptionalParams,
  AzureSiteRecoveryManagementServiceAPI
} from "@azure/arm-recoveryservicesdatareplication";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates the protected item.
 *
 * @summary Creates the protected item.
 * x-ms-original-file: specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/preview/2021-02-16-preview/examples/ProtectedItem_Create.json
 */
async function protectedItemCreate(): Promise<void> {
  const subscriptionId =
    process.env["RECOVERYSERVICESDATAREPLICATION_SUBSCRIPTION_ID"] ||
    "930CEC23-4430-4513-B855-DBA237E2F3BF";
  const resourceGroupName =
    process.env["RECOVERYSERVICESDATAREPLICATION_RESOURCE_GROUP"] ||
    "rgrecoveryservicesdatareplication";
  const vaultName = "4";
  const protectedItemName = "d";
  const body: ProtectedItemModel = {
    properties: {
      customProperties: { instanceType: "VMwareToAzStackHCI" },
      policyName: "tjoeiynplt",
      replicationExtensionName: "jwxdo"
    }
  };
  const options: ProtectedItemCreateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new AzureSiteRecoveryManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.protectedItem.beginCreateAndWait(
    resourceGroupName,
    vaultName,
    protectedItemName,
    options
  );
  console.log(result);
}

async function main(): Promise<void> {
  protectedItemCreate();
}

main().catch(console.error);
