// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import "dotenv/config";
import createClient from "../src/documentTranslationClient.js";
import {
  ONE_TEST_DOCUMENTS,
  StartTranslationAndWait,
  createSourceContainer,
  createTargetContainer,
} from "../test/public/utils/samplesHelper.js";
import {
  createSourceInput,
  createTargetInput,
  createBatchRequest,
  getTranslationOperationID,
} from "../test/public/utils/testHelper.js";
import type { GetTranslationStatus200Response } from "../src/responses.js";
import { isUnexpected } from "../src/index.js";
const endpoint =
  process.env["ENDPOINT"] ||
  "https://<translator-instance>-doctranslation.cognitiveservices.azure.com";
const apiKey = process.env["DOCUMENT_TRANSLATION_API_KEY"] || "<API_Key>";
const credentials = { key: apiKey ?? "" };

export async function main(): Promise<void> {
  console.log("== Get Translation Status ==");
  const client = createClient(endpoint, credentials);

  const sourceUrl = await createSourceContainer(ONE_TEST_DOCUMENTS);
  const sourceInput = createSourceInput(sourceUrl);
  const targetUrl = await createTargetContainer();
  const targetInput = createTargetInput(targetUrl, "fr");
  const batchRequest = createBatchRequest(sourceInput, [targetInput]);

  // Start translation
  const batchRequests = { inputs: [batchRequest] };
  const translationResponse = await StartTranslationAndWait(client, batchRequests);
  const operationLocationUrl = translationResponse.headers["operation-location"];
  const operationId = getTranslationOperationID(operationLocationUrl);

  // get Translation Status
  const response = (await client
    .path("/document/batches/{id}", operationId)
    .get()) as GetTranslationStatus200Response;

  if (isUnexpected(response)) {
    throw response.body;
  }
  const responseBody = response.body;
  console.log("Translation ID = " + responseBody.id);
  console.log("Translation Status = " + responseBody.status);
  console.log("Translation createdDateTimeUtc = " + responseBody.createdDateTimeUtc);
  console.log("Translation lastActionDateTimeUtc = " + responseBody.lastActionDateTimeUtc);
  console.log("Total documents submitted for translation = " + responseBody.summary.total);
  console.log("Total characters charged = " + responseBody.summary.totalCharacterCharged);
}

main().catch((err) => {
  console.error(err);
});
