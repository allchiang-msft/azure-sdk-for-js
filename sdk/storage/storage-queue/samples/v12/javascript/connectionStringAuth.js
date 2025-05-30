// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary authenticate with the storage service using a connection string
 */

const { QueueServiceClient } = require("@azure/storage-queue");

// Load the .env file if it exists
require("dotenv").config();

async function main() {
  // Create Queue Service Client from Account connection string or SAS connection string
  // Account connection string example - `DefaultEndpointsProtocol=https;AccountName=myaccount;AccountKey=accountKey;EndpointSuffix=core.windows.net`
  // SAS connection string example - `BlobEndpoint=https://myaccount.blob.core.windows.net/;QueueEndpoint=https://myaccount.queue.core.windows.net/;FileEndpoint=https://myaccount.file.core.windows.net/;TableEndpoint=https://myaccount.table.core.windows.net/;SharedAccessSignature=sasString`
  const STORAGE_CONNECTION_STRING = process.env.STORAGE_CONNECTION_STRING || "";
  // Note - Account connection string can only be used in node.
  const queueServiceClient = QueueServiceClient.fromConnectionString(STORAGE_CONNECTION_STRING);

  // Create a new queue
  const queueName = `newqueue${new Date().getTime()}`;
  const queueClient = queueServiceClient.getQueueClient(queueName);
  const createQueueResponse = await queueClient.create();
  console.log(
    `Created queue ${queueClient.name} successfully, service assigned request ID: ${createQueueResponse.requestId}`,
  );

  // Delete the queue.
  const deleteQueueResponse = await queueClient.delete();
  console.log(
    `Deleted queue ${queueClient.name} successfully, service assigned request ID: ${deleteQueueResponse.requestId}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

module.exports = { main };
