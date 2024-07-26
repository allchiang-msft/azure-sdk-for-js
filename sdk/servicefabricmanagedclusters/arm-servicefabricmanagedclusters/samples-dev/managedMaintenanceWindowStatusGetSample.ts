/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ServiceFabricManagedClustersManagementClient } from "@azure/arm-servicefabricmanagedclusters";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Action to get Maintenance Window Status of the Service Fabric Managed Clusters.
 *
 * @summary Action to get Maintenance Window Status of the Service Fabric Managed Clusters.
 * x-ms-original-file: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/stable/2024-04-01/examples/ManagedMaintenanceWindowStatusGet_example.json
 */
async function maintenanceWindowStatus() {
  const subscriptionId =
    process.env["SERVICEFABRICMANAGEDCLUSTERS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SERVICEFABRICMANAGEDCLUSTERS_RESOURCE_GROUP"] ||
    "resourceGroup1";
  const clusterName = "mycluster1";
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricManagedClustersManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.managedMaintenanceWindowStatusOperations.get(
    resourceGroupName,
    clusterName,
  );
  console.log(result);
}

async function main() {
  maintenanceWindowStatus();
}

main().catch(console.error);
