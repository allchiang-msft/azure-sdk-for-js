/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { VaultListBySubscriptionOptionalParams } from "@azure/arm-recoveryservicesdatareplication";
import { AzureSiteRecoveryManagementServiceAPI } from "@azure/arm-recoveryservicesdatareplication";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the list of vaults in the given subscription.
 *
 * @summary Gets the list of vaults in the given subscription.
 * x-ms-original-file: specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/preview/2021-02-16-preview/examples/Vault_ListBySubscription.json
 */
async function vaultListBySubscription(): Promise<void> {
  const subscriptionId =
    process.env["RECOVERYSERVICESDATAREPLICATION_SUBSCRIPTION_ID"] ||
    "930CEC23-4430-4513-B855-DBA237E2F3BF";
  const continuationToken = "dqsjhseyugyexxrlrln";
  const options: VaultListBySubscriptionOptionalParams = { continuationToken };
  const credential = new DefaultAzureCredential();
  const client = new AzureSiteRecoveryManagementServiceAPI(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.vault.listBySubscription(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await vaultListBySubscription();
}

main().catch(console.error);
