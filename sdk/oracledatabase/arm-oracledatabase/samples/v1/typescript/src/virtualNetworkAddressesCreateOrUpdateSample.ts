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
  VirtualNetworkAddress,
  OracleDatabaseManagementClient,
} from "@azure/arm-oracledatabase";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a VirtualNetworkAddress
 *
 * @summary Create a VirtualNetworkAddress
 * x-ms-original-file: specification/oracle/resource-manager/Oracle.Database/stable/2023-09-01/examples/virtualNetworkAddresses_create.json
 */
async function createVirtualNetworkAddress(): Promise<void> {
  const subscriptionId =
    process.env["ORACLEDATABASE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["ORACLEDATABASE_RESOURCE_GROUP"] || "rg000";
  const cloudvmclustername = "cluster1";
  const virtualnetworkaddressname = "hostname1";
  const resource: VirtualNetworkAddress = {
    properties: { ipAddress: "192.168.0.1", vmOcid: "ocid1..aaaa" },
  };
  const credential = new DefaultAzureCredential();
  const client = new OracleDatabaseManagementClient(credential, subscriptionId);
  const result =
    await client.virtualNetworkAddresses.beginCreateOrUpdateAndWait(
      resourceGroupName,
      cloudvmclustername,
      virtualnetworkaddressname,
      resource,
    );
  console.log(result);
}

async function main(): Promise<void> {
  createVirtualNetworkAddress();
}

main().catch(console.error);
