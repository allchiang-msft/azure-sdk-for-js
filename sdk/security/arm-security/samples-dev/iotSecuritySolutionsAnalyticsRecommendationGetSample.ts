/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Use this method to get the aggregated security analytics recommendation of yours IoT Security solution. This aggregation is performed by recommendation name.
 *
 * @summary Use this method to get the aggregated security analytics recommendation of yours IoT Security solution. This aggregation is performed by recommendation name.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2019-08-01/examples/IoTSecuritySolutionsAnalytics/GetIoTSecuritySolutionsSecurityRecommendation.json
 */
async function getTheAggregatedSecurityAnalyticsRecommendationOfYoursIoTSecuritySolution(): Promise<void> {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "075423e9-7d33-4166-8bdf-3920b04e3735";
  const resourceGroupName = process.env["SECURITY_RESOURCE_GROUP"] || "IoTEdgeResources";
  const solutionName = "default";
  const aggregatedRecommendationName = "OpenPortsOnDevice";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.iotSecuritySolutionsAnalyticsRecommendation.get(
    resourceGroupName,
    solutionName,
    aggregatedRecommendationName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getTheAggregatedSecurityAnalyticsRecommendationOfYoursIoTSecuritySolution();
}

main().catch(console.error);
