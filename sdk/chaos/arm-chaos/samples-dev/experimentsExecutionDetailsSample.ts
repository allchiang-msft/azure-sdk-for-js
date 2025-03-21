/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { ChaosManagementClient } from "@azure/arm-chaos";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Execution details of an experiment resource.
 *
 * @summary Execution details of an experiment resource.
 * x-ms-original-file: specification/chaos/resource-manager/Microsoft.Chaos/stable/2024-01-01/examples/DetailsExperiment.json
 */
async function getExperimentExecutionDetails(): Promise<void> {
  const subscriptionId =
    process.env["CHAOS_SUBSCRIPTION_ID"] || "6b052e15-03d3-4f17-b2e1-be7f07588291";
  const resourceGroupName = process.env["CHAOS_RESOURCE_GROUP"] || "exampleRG";
  const experimentName = "exampleExperiment";
  const executionId = "f24500ad-744e-4a26-864b-b76199eac333";
  const credential = new DefaultAzureCredential();
  const client = new ChaosManagementClient(credential, subscriptionId);
  const result = await client.experiments.executionDetails(
    resourceGroupName,
    experimentName,
    executionId,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getExperimentExecutionDetails();
}

main().catch(console.error);
