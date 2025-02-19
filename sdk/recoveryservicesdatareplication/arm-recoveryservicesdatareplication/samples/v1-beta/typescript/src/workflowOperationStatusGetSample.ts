/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureSiteRecoveryManagementServiceAPI } from "@azure/arm-recoveryservicesdatareplication";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Tracks the results of an asynchronous operation on the job.
 *
 * @summary Tracks the results of an asynchronous operation on the job.
 * x-ms-original-file: specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/preview/2021-02-16-preview/examples/WorkflowOperationStatus_Get.json
 */
async function workflowOperationStatusGet(): Promise<void> {
  const subscriptionId =
    process.env["RECOVERYSERVICESDATAREPLICATION_SUBSCRIPTION_ID"] ||
    "930CEC23-4430-4513-B855-DBA237E2F3BF";
  const resourceGroupName =
    process.env["RECOVERYSERVICESDATAREPLICATION_RESOURCE_GROUP"] ||
    "rgrecoveryservicesdatareplication";
  const vaultName = "4";
  const jobName = "ZGH4y";
  const operationId = "wdqcxc";
  const credential = new DefaultAzureCredential();
  const client = new AzureSiteRecoveryManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.workflowOperationStatus.get(
    resourceGroupName,
    vaultName,
    jobName,
    operationId
  );
  console.log(result);
}

async function main(): Promise<void> {
  workflowOperationStatusGet();
}

main().catch(console.error);
