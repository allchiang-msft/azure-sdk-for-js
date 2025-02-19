/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RecoveryServicesBackupClient } from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Provides the details of the protection intent up item. This is an asynchronous operation. To know the status of the operation,
call the GetItemOperationResult API.
 *
 * @summary Provides the details of the protection intent up item. This is an asynchronous operation. To know the status of the operation,
call the GetItemOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/AzureWorkload/BackupProtectionIntent_Get.json
 */
async function getProtectionIntentForAnItem(): Promise<void> {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "myVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "myRG";
  const fabricName = "Azure";
  const intentObjectName = "249D9B07-D2EF-4202-AA64-65F35418564E";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectionIntentOperations.get(
    vaultName,
    resourceGroupName,
    fabricName,
    intentObjectName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  getProtectionIntentForAnItem();
}

main().catch(console.error);
