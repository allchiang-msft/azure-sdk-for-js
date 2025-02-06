/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HDInsightContainersManagementClient } from "@azure/arm-hdinsightcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List a cluster available upgrade.
 *
 * @summary List a cluster available upgrade.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsightOnAks/preview/2024-05-01-preview/examples/ListClusterAvailableUpgrades.json
 */
async function getClusterAvailableUpgrade(): Promise<void> {
  const subscriptionId =
    process.env["HDINSIGHT_SUBSCRIPTION_ID"] ||
    "10e32bab-26da-4cc4-a441-52b318f824e6";
  const resourceGroupName =
    process.env["HDINSIGHT_RESOURCE_GROUP"] || "hiloResourcegroup";
  const clusterPoolName = "clusterpool1";
  const clusterName = "cluster1";
  const credential = new DefaultAzureCredential();
  const client = new HDInsightContainersManagementClient(
    credential,
    subscriptionId,
  );
  const resArray = new Array();
  for await (let item of client.clusterAvailableUpgrades.list(
    resourceGroupName,
    clusterPoolName,
    clusterName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  getClusterAvailableUpgrade();
}

main().catch(console.error);
