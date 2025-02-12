/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApplicationClient } from "@azure/arm-managedapplications";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists all of the available Microsoft.Solutions REST API operations.
 *
 * @summary Lists all of the available Microsoft.Solutions REST API operations.
 * x-ms-original-file: specification/solutions/resource-manager/Microsoft.Solutions/stable/2021-07-01/examples/listSolutionsOperations.json
 */
async function listSolutionsOperations(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = new ApplicationClient(credential);
  const resArray = new Array();
  for await (let item of client.listOperations()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  listSolutionsOperations();
}

main().catch(console.error);
