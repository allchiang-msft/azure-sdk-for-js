// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createNetworkManagementClient, {
  VirtualHubIpConfigurationGetParameters,
} from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Retrieves the details of a Virtual Hub Ip configuration.
 *
 * @summary Retrieves the details of a Virtual Hub Ip configuration.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/VirtualHubIpConfigurationGet.json
 */
async function virtualHubVirtualHubRouteTableV2Get() {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const resourceGroupName = "rg1";
  const virtualHubName = "hub1";
  const ipConfigName = "ipconfig1";
  const options: VirtualHubIpConfigurationGetParameters = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/ipConfigurations/{ipConfigName}",
      subscriptionId,
      resourceGroupName,
      virtualHubName,
      ipConfigName,
    )
    .get(options);
  console.log(result);
}

virtualHubVirtualHubRouteTableV2Get().catch(console.error);
