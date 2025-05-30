// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample shows how to get the full information about a custom model by its model ID, including information about
 * the document types in the model and their field schemas.
 *
 * @summary get information about a model by its ID
 */

const { DocumentModelAdministrationClient } = require("@azure/ai-form-recognizer");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

async function main() {
  const endpoint = process.env.FORM_RECOGNIZER_ENDPOINT || "<endpoint>";
  const credential = new DefaultAzureCredential();

  const client = new DocumentModelAdministrationClient(endpoint, credential);

  // The model ID to query. This can be any model ID, not just a custom model, so for example
  // the following sample uses `"prebuilt-idDocument"`, but you can change it to any model ID
  // you'd like to inspect.
  const modelId = "prebuilt-idDocument";
  const model = await client.getDocumentModel(modelId);

  console.log("ID", model.modelId);
  console.log("Created:", model.createdOn);
  console.log("Description: ", model.description || "<none>");

  console.log("Document Types:");
  for (const [docType, { fieldSchema }] of Object.entries(model.docTypes || {})) {
    // We can also programmatically access a schema of the fields.
    console.log("-", docType, JSON.stringify(fieldSchema, undefined, 2));
  }
}

main().catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});
