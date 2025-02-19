/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { DraModel, DraCreateOptionalParams } from "@azure/arm-recoveryservicesdatareplication";
import { AzureSiteRecoveryManagementServiceAPI } from "@azure/arm-recoveryservicesdatareplication";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates the fabric agent.
 *
 * @summary Creates the fabric agent.
 * x-ms-original-file: specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/preview/2021-02-16-preview/examples/Dra_Create.json
 */
async function draCreate(): Promise<void> {
  const subscriptionId =
    process.env["RECOVERYSERVICESDATAREPLICATION_SUBSCRIPTION_ID"] ||
    "930CEC23-4430-4513-B855-DBA237E2F3BF";
  const resourceGroupName =
    process.env["RECOVERYSERVICESDATAREPLICATION_RESOURCE_GROUP"] ||
    "rgrecoveryservicesdatareplication";
  const fabricName = "wPR";
  const fabricAgentName = "M";
  const body: DraModel = {
    properties: {
      authenticationIdentity: {
        aadAuthority: "bubwwbowfhdmujrt",
        applicationId: "cwktzrwajuvfyyymfstpey",
        audience: "dkjobanyqgzenivyxhvavottpc",
        objectId: "khsiaqfbpuhp",
        tenantId: "joclkkdovixwapephhxaqtefubhhmq",
      },
      customProperties: { instanceType: "VMware" },
      machineId: "envzcoijbqhtrpncbjbhk",
      machineName: "y",
      resourceAccessIdentity: {
        aadAuthority: "bubwwbowfhdmujrt",
        applicationId: "cwktzrwajuvfyyymfstpey",
        audience: "dkjobanyqgzenivyxhvavottpc",
        objectId: "khsiaqfbpuhp",
        tenantId: "joclkkdovixwapephhxaqtefubhhmq",
      },
    },
  };
  const options: DraCreateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new AzureSiteRecoveryManagementServiceAPI(credential, subscriptionId);
  const result = await client.dra.beginCreateAndWait(
    resourceGroupName,
    fabricName,
    fabricAgentName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await draCreate();
}

main().catch(console.error);
