// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to use the TableTransaction helper
 * to build a transaction request.
 *
 * @summary sends transactional request using TableTransaction helper
 */

const { TableClient, TableTransaction } = require("@azure/data-tables");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

const endpoint = process.env.TABLES_URL || "";

async function batchOperations() {
  console.log("== TableTransaction Sample ==");

  // Note that this sample assumes that a table with tableName exists
  const tableName = `transactionHelper`;

  // See authenticationMethods sample for other options of creating a new client
  const client = new TableClient(endpoint, tableName, new DefaultAzureCredential());

  // Create the table
  await client.createTable();

  const partitionKey = "Stationery";

  const transaction = new TableTransaction();

  // Add actions to the transaction
  await transaction.createEntity({
    partitionKey,
    rowKey: "A1",
    name: "Marker Set",
    price: 5.0,
    quantity: 21,
  });
  await transaction.createEntity({
    partitionKey,
    rowKey: "A2",
    name: "Pen Set",
    price: 2.0,
    quantity: 6,
  });
  await transaction.createEntity({
    partitionKey,
    rowKey: "A3",
    name: "Pencil",
    price: 1.5,
    quantity: 100,
  });

  // Submit the transaction using the actions list built by the helper
  const transactionResult = await client.submitTransaction(transaction.actions);

  console.log(transactionResult.subResponses);
  // Output:
  // [
  //   {
  //     status: 204,
  //     rowKey: 'A1',
  //     etag: `W/"datetime'2020-10-02T03%3A31%3A09.9324186Z'"`
  //   },
  //   {
  //     status: 204,
  //     rowKey: 'A2',
  //     etag: `W/"datetime'2020-10-02T03%3A31%3A09.9324186Z'"`
  //   },
  //   {
  //     status: 204,
  //     rowKey: 'A3',
  //     etag: `W/"datetime'2020-10-02T03%3A31%3A09.9324186Z'"`
  //   }
  // ]

  // Delete the table to clean up
  await client.deleteTable();
}

batchOperations().catch((err) => {
  console.error("The sample encountered an error:", err);
});
