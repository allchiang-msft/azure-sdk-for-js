// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const createNetworkManagementClient = require("@azure-rest/arm-network").default,
  { paginate } = require("@azure-rest/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to Returns all of the private link service ids that can be linked to a Private Endpoint with auto approved in this subscription in this region.
 *
 * @summary Returns all of the private link service ids that can be linked to a Private Endpoint with auto approved in this subscription in this region.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/AutoApprovedPrivateLinkServicesGet.json
 */
async function getListOfPrivateLinkServiceIdThatCanBeLinkedToAPrivateEndPointWithAutoApproved() {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const location = "regionName";
  const options = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/autoApprovedPrivateLinkServices",
      subscriptionId,
      location,
    )
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

getListOfPrivateLinkServiceIdThatCanBeLinkedToAPrivateEndPointWithAutoApproved().catch(
  console.error,
);
