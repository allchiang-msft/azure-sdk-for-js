/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RedisEnterpriseManagementClient } from "@azure/arm-redisenterprisecache";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes a single access policy assignment.
 *
 * @summary Deletes a single access policy assignment.
 * x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/preview/2025-05-01-preview/examples/RedisEnterpriseAccessPolicyAssignmentDelete.json
 */
async function redisEnterpriseAccessPolicyAssignmentDelete(): Promise<void> {
  const subscriptionId =
    process.env["REDISENTERPRISE_SUBSCRIPTION_ID"] ||
    "e7b5a9d2-6b6a-4d2f-9143-20d9a10f5b8f";
  const resourceGroupName =
    process.env["REDISENTERPRISE_RESOURCE_GROUP"] || "rg1";
  const clusterName = "cache1";
  const databaseName = "default";
  const accessPolicyAssignmentName = "defaultTestEntraApp1";
  const credential = new DefaultAzureCredential();
  const client = new RedisEnterpriseManagementClient(
    credential,
    subscriptionId,
  );
  const result =
    await client.accessPolicyAssignmentOperations.beginDeleteAndWait(
      resourceGroupName,
      clusterName,
      databaseName,
      accessPolicyAssignmentName,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await redisEnterpriseAccessPolicyAssignmentDelete();
}

main().catch(console.error);
