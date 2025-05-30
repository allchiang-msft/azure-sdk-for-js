// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates how to analyze user query using an orchestration project.
 * In this sample, orchestration project's top intent will map to a LUIS project
 *
 * @summary Orchestration project with LUIS response
 */

const { ConversationAnalysisClient } = require("@azure/ai-language-conversations");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

const cluEndpoint =
  process.env.LANGUAGE_ENDPOINT || "https://dummyendpoint.cognitiveservices.azure.com";
const projectName = process.env.AZURE_CONVERSATIONS_WORKFLOW_PROJECT_NAME || "<project-name>";
const deploymentName =
  process.env.AZURE_CONVERSATIONS_WORKFLOW_DEPLOYMENT_NAME || "<deployment-name>";

const service = new ConversationAnalysisClient(cluEndpoint, new DefaultAzureCredential());

const body = {
  kind: "Conversation",
  analysisInput: {
    conversationItem: {
      participantId: "1",
      id: "1",
      modality: "text",
      language: "en",
      text: "Reserve a table for 2 at the Italian restaurant",
    },
  },
  parameters: {
    projectName: projectName,
    deploymentName: deploymentName,
    verbose: true,
    isLoggingEnabled: false,
  },
};

async function main() {
  // Analyze query
  const { result } = await service.analyzeConversation(body);
  console.log("query: ", result.query);
  console.log("project kind: ", result.prediction.projectKind);

  const topIntent = result.prediction.topIntent || "None";
  console.log("top intent: ", topIntent);

  const prediction = result.prediction;
  if (prediction.projectKind === "Orchestration") {
    const topIntentObject = prediction.intents[topIntent];
    console.log("confidence score: ", topIntentObject.confidence);
    console.log("project kind: ", topIntentObject.targetProjectKind);

    if (topIntentObject.targetProjectKind === "Luis" && topIntentObject.result) {
      console.log("\nluis response:");

      const luisResponse = topIntentObject.result.prediction;
      console.log("top intent: ", luisResponse.topIntent);
      console.log("\nentities:");
      for (const entity of luisResponse.entities) {
        console.log("\n", entity);
      }
    }
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { main };
