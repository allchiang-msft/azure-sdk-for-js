// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The request details to use when creating a new agent. */
export interface CreateAgentOptions {
  /** The ID of the model to use. */
  model: string;
  /** The name of the new agent. */
  name?: string | null;
  /** The description of the new agent. */
  description?: string | null;
  /** The system instructions for the new agent to use. */
  instructions?: string | null;
  /** The collection of tools to enable for the new agent. */
  tools?: Array<ToolDefinition>;
  /**
   * A set of resources that are used by the agent's tools. The resources are specific to the type of tool. For example, the `code_interpreter`
   * tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  toolResources?: ToolResources | null;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random,
   * while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature?: number | null;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.
   * So 0.1 means only the tokens comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or temperature but not both.
   */
  topP?: number | null;
  /** The response format of the tool calls used by this agent. */
  responseFormat?: AgentsApiResponseFormatOption | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** An abstract representation of an input tool definition that an agent can use. */
export interface ToolDefinitionParent {
  type: string;
}

/** The input definition information for a code interpreter tool as used to configure an agent. */
export interface CodeInterpreterToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'code_interpreter'. */
  type: "code_interpreter";
}

/** The input definition information for a file search tool as used to configure an agent. */
export interface FileSearchToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'file_search'. */
  type: "file_search";
  /** Options overrides for the file search tool. */
  fileSearch?: FileSearchToolDefinitionDetails;
}

/** Options overrides for the file search tool. */
export interface FileSearchToolDefinitionDetails {
  /**
   * The maximum number of results the file search tool should output. The default is 20 for gpt-4* models and 5 for gpt-3.5-turbo. This number should be between 1 and 50 inclusive.
   *
   * Note that the file search tool may output fewer than `max_num_results` results. See the file search tool documentation for more information.
   */
  maxNumResults?: number;
  /** Ranking options for file search. */
  rankingOptions?: FileSearchRankingOptions;
}

/** Ranking options for file search. */
export interface FileSearchRankingOptions {
  /** File search ranker. */
  ranker: string;
  /** Ranker search threshold. */
  scoreThreshold: number;
}

/** The input definition information for a function tool as used to configure an agent. */
export interface FunctionToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'function'. */
  type: "function";
  /** The definition of the concrete function that the function tool should call. */
  function: FunctionDefinition;
}

/** The input definition information for a function. */
export interface FunctionDefinition {
  /** The name of the function to be called. */
  name: string;
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description?: string;
  /** The parameters the functions accepts, described as a JSON Schema object. */
  parameters: unknown;
}

/** The input definition information for a bing grounding search tool as used to configure an agent. */
export interface BingGroundingToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'bing_grounding'. */
  type: "bing_grounding";
  /** The list of connections used by the bing grounding tool. */
  bingGrounding: ToolConnectionList;
}

/**
 * The input definition information for a bing custom search tool as used to configure an agent.
 */
export interface BingCustomSearchToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'bing_custom_search'. */
  type: "bing_custom_search";
  /** The list of connections used by the bing custom search tool. */
  bingCustomSearch?: SearchConfigurationList;
}

/** The array of search configurations used by the bing custom search tool. */
export interface SearchConfigurationList {
  /** The list of connections used by the bing custom search tool. */
  searchConfigurations: Array<SearchConfiguration>;
}

/** The input definition information for a search configuration. */
export interface SearchConfiguration {
  /** A connection in a ToolConnectionList attached to this tool. */
  connectionId: string;
  /** Name of the custom configuration instance given to config. */
  instanceName: string;
}

/** A set of connection resources currently used by either the `bing_grounding`, `fabric_dataagent`, or `sharepoint_grounding` tools. */
export interface ToolConnectionList {
  /**
   * The connections attached to this tool. There can be a maximum of 1 connection
   * resource attached to the tool.
   */
  connections?: Array<ToolConnection>;
}

/** A connection resource. */
export interface ToolConnection {
  /** A connection in a ToolConnectionList attached to this tool. */
  connectionId: string;
}

/** The input definition information for a Microsoft Fabric tool as used to configure an agent. */
export interface MicrosoftFabricToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'fabric_dataagent'. */
  type: "fabric_dataagent";
  /** The list of connections used by the Microsoft Fabric tool. */
  fabricDataAgent: ToolConnectionList;
}

/** The input definition information for a sharepoint tool as used to configure an agent. */
export interface SharepointToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'sharepoint_grounding'. */
  type: "sharepoint_grounding";
  /** The list of connections used by the SharePoint tool. */
  sharepointGrounding: ToolConnectionList;
}

/** The input definition information for an Azure AI search tool as used to configure an agent. */
export interface AzureAISearchToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'azure_ai_search'. */
  type: "azure_ai_search";
}

/** The input definition information for an OpenAPI tool as used to configure an agent. */
export interface OpenApiToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'openapi'. */
  type: "openapi";
  /** The openapi function definition. */
  openapi: OpenApiFunctionDefinition;
}

/** The input definition information for an openapi function. */
export interface OpenApiFunctionDefinition {
  /** The name of the function to be called. */
  name: string;
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description?: string;
  /** The openapi function shape, described as a JSON Schema object. */
  spec: unknown;
  /** Open API authentication details */
  auth: OpenApiAuthDetails;
  /** List of OpenAPI spec parameters that will use user-provided defaults */
  defaultParams?: string[];
  /** List of functions returned in response */
  functions?: Array<FunctionDefinition>;
}

/** authentication details for OpenApiFunctionDefinition */
export interface OpenApiAuthDetailsParent {
  type: OpenApiAuthType;
}

/** Security details for OpenApi anonymous authentication */
export interface OpenApiAnonymousAuthDetails extends OpenApiAuthDetailsParent {
  /** The object type, which is always 'anonymous'. */
  type: "anonymous";
}

/** Security details for OpenApi connection authentication */
export interface OpenApiConnectionAuthDetails extends OpenApiAuthDetailsParent {
  /** The object type, which is always 'connection'. */
  type: "connection";
  /** Connection auth security details */
  securityScheme: OpenApiConnectionSecurityScheme;
}

/** Security scheme for OpenApi managed_identity authentication */
export interface OpenApiConnectionSecurityScheme {
  /** Connection id for Connection auth type */
  connectionId: string;
}

/** Security details for OpenApi managed_identity authentication */
export interface OpenApiManagedAuthDetails extends OpenApiAuthDetailsParent {
  /** The object type, which is always 'managed_identity'. */
  type: "managed_identity";
  /** Connection auth security details */
  securityScheme: OpenApiManagedSecurityScheme;
}

/** Security scheme for OpenApi managed_identity authentication */
export interface OpenApiManagedSecurityScheme {
  /** Authentication scope for managed_identity auth type */
  audience: string;
}

/** A list of search configurations currently used by the `bing_custom_search` tool. */
export interface SearchConfigurationList {
  /**
   * The connections attached to this tool. There can be a maximum of 1 connection
   * resource attached to the tool.
   */
  searchConfigurations: Array<SearchConfiguration>;
}

/** A custom search configuration. */
export interface SearchConfiguration {
  /** A connection in a ToolConnectionList attached to this tool. */
  connectionId: string;
  /** Name of the custom configuration instance given to config. */
  instanceName: string;
}

/** The input definition information for a azure function tool as used to configure an agent. */
export interface AzureFunctionToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'azure_function'. */
  type: "azure_function";
  /** The definition of the concrete function that the function tool should call. */
  azureFunction: AzureFunctionDefinition;
}

/** The definition of Azure function. */
export interface AzureFunctionDefinition {
  /** The definition of azure function and its parameters. */
  function: FunctionDefinition;
  /** Input storage queue. The queue storage trigger runs a function as messages are added to it. */
  inputBinding: AzureFunctionBinding;
  /** Output storage queue. The function writes output to this queue when the input items are processed. */
  outputBinding: AzureFunctionBinding;
}

/** The structure for keeping storage queue name and URI. */
export interface AzureFunctionBinding {
  /** The type of binding, which is always 'storage_queue'. */
  type: "storage_queue";
  /** Storage queue. */
  storageQueue: AzureFunctionStorageQueue;
}

/** The structure for keeping storage queue name and URI. */
export interface AzureFunctionStorageQueue {
  /** URI to the Azure Storage Queue service allowing you to manipulate a queue. */
  queueServiceEndpoint: string;
  /** The name of an Azure function storage queue. */
  queueName: string;
}

/**
 * A set of resources that are used by the agent's tools. The resources are specific to the type of
 * tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search`
 * tool requires a list of vector store IDs.
 */
export interface ToolResources {
  /** Resources to be used by the `code_interpreter` tool consisting of file IDs. */
  codeInterpreter?: CodeInterpreterToolResource;
  /** Resources to be used by the `file_search` tool consisting of vector store IDs. */
  fileSearch?: FileSearchToolResource;
  /** Resources to be used by the `azure_ai_search` tool consisting of index IDs and names. */
  azureAISearch?: AzureAISearchResource;
  /** Resources to be used by the `azure_function` tool consisting of connection IDs. */
  azureFunction?: AzureFunctionToolResource;
}

/** A set of resources that are used by the `code_interpreter` tool. */
export interface CodeInterpreterToolResource {
  /**
   * A list of file IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files
   * associated with the tool.
   */
  fileIds?: string[];
  /** The data sources to be used. This option is mutually exclusive with the `fileIds` property. */
  dataSources?: Array<VectorStoreDataSource>;
}

/**
 * The structure, containing Azure asset URI path and the asset type of the file used as a data source
 * for the enterprise file search.
 */
export interface VectorStoreDataSource {
  /** Asset URI. */
  uri: string;
  /**
   * The asset type
   *
   * Possible values: "uri_asset", "id_asset"
   */
  type: VectorStoreDataSourceAssetType;
}

/** A set of resources that are used by the `file_search` tool. */
export interface FileSearchToolResource {
  /**
   * The ID of the vector store attached to this agent. There can be a maximum of 1 vector
   * store attached to the agent.
   */
  vectorStoreIds?: string[];
  /**
   * The list of vector store configuration objects from Azure.
   * This list is limited to one element.
   * The only element of this list contains the list of azure asset IDs used by the search tool.
   */
  vectorStores?: Array<VectorStoreConfigurations>;
}

export interface AzureFunctionToolResource {
  /** The name of the function to be called. */
  name: string;
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description: string;
  /** The parameters the functions accepts, described as a JSON Schema object. */
  parameters: unknown;
  inputQueue: AzureFunctionStorageQueue;
  outputQueue: AzureFunctionStorageQueue;
}

/** The structure, containing the list of vector storage configurations i.e. the list of azure asset IDs. */
export interface VectorStoreConfigurations {
  /** Name */
  name: string;
  /** Configurations */
  configuration: VectorStoreConfiguration;
}

/**
 * Vector storage configuration is the list of data sources, used when multiple
 * files can be used for the enterprise file search.
 */
export interface VectorStoreConfiguration {
  /** Data sources */
  dataSources: Array<VectorStoreDataSource>;
}

/** A set of index resources used by the `azure_ai_search` tool. */
export interface AzureAISearchResource {
  /**
   * The indices attached to this agent. There can be a maximum of 1 index
   * resource attached to the agent.
   */
  indexes?: Array<IndexResource>;
}

/** the optional parameters for the Azure AI Search tool */
export interface CreateAzureAISearchToolOptions {
  /** the query type of azure ai search. */
  queryType?: AzureAISearchQueryType;
  /** the topK number of documents to retrieve from azure ai search. */
  topK?: number;
  /** the filter used for azure ai search. */
  filter?: string;
}

/** A Index resource. */
export interface IndexResource {
  /** An index connection id in an IndexResource attached to this agent. */
  indexConnectionId: string;
  /** The name of an index in an IndexResource attached to this agent. */
  indexName: string;
  /**
   * Type of query in an AIIndexResource attached to this agent.
   *
   * Possible values: "simple", "semantic", "vector", "vector_simple_hybrid", "vector_semantic_hybrid"
   */
  queryType?: AzureAISearchQueryType;
  /** Number of documents to retrieve from search and present to the model. */
  topK?: number;
  /** Odata filter string for search resource. */
  filter?: string;
}

/**
 * An object describing the expected output of the model. If `json_object` only `function` type `tools` are allowed to be passed to the Run.
 * If `text` the model can return text or any value needed.
 */
export interface AgentsApiResponseFormat {
  /**
   * Must be one of `text` or `json_object`.
   *
   * Possible values: "text", "json_object"
   */
  type?: ResponseFormat;
}

/** The type of response format being defined: `json_schema` */
export interface ResponseFormatJsonSchemaType {
  /** Type */
  type: "json_schema";
  /** The JSON schema, describing response format. */
  jsonSchema: ResponseFormatJsonSchema;
}

/** A description of what the response format is for, used by the model to determine how to respond in the format. */
export interface ResponseFormatJsonSchema {
  /** A description of what the response format is for, used by the model to determine how to respond in the format. */
  description?: string;
  /** The name of a schema. */
  name: string;
  /** The JSON schema object, describing the response format. */
  schema: unknown;
}

/** The request details to use when modifying an existing agent. */
export interface UpdateAgentOptions {
  /** The ID of the model to use. */
  model?: string;
  /** The modified name for the agent to use. */
  name?: string | null;
  /** The modified description for the agent to use. */
  description?: string | null;
  /** The modified system instructions for the new agent to use. */
  instructions?: string | null;
  /** The modified collection of tools to enable for the agent. */
  tools?: Array<ToolDefinition>;
  /**
   * A set of resources that are used by the agent's tools. The resources are specific to the type of tool. For example,
   * the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  toolResources?: ToolResources;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random,
   * while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature?: number | null;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.
   * So 0.1 means only the tokens comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or temperature but not both.
   */
  topP?: number | null;
  /** The response format of the tool calls used by this agent. */
  responseFormat?: AgentsApiResponseFormatOption | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** The details used to create a new agent thread. */
export interface AgentThreadCreationOptions {
  /** The initial messages to associate with the new thread. */
  messages?: Array<ThreadMessageOptions>;
  /**
   * A set of resources that are made available to the agent's tools in this thread. The resources are specific to the
   * type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires
   * a list of vector store IDs.
   */
  toolResources?: ToolResources | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** A single message within an agent thread, as provided during that thread's creation for its initial state. */
export interface ThreadMessageOptions {
  /**
   * The role of the entity that is creating the message. Allowed values include:
   * - `user`: Indicates the message is sent by an actual user and should be used in most
   * cases to represent user-generated messages.
   * - `assistant`: Indicates the message is generated by the agent. Use this value to insert
   * messages from the agent into the
   * conversation.
   *
   * Possible values: "user", "assistant"
   */
  role: MessageRole;
  /**
   * The textual content of the initial message. Currently, robust input including images and annotated text may only be provided via
   * a separate call to the create message API.
   */
  content: CreateMessageContent;
  /** A list of files attached to the message, and the tools they should be added to. */
  attachments?: Array<MessageAttachment> | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** Defines a single content block when creating a message. The 'type' field determines whether it is text, an image file, or an external image URL, etc. */
export interface MessageContentBlockInputParent {
  type: MessageBlockType;
}

/** Creation-time text block. */
export interface MessageTextBlockInput extends MessageContentBlockInputParent {
  /** Always 'text'. */
  type: "text";
  /** The text content. */
  text: string;
}

/** Creation-time image-file block. */
export interface MessageImageFileBlockInput extends MessageContentBlockInputParent {
  /** Always 'image_file'. */
  type: "image_file";
  /** References an uploaded image by file ID. */
  imageFile: MessageImageFileParam;
}

/** Parameter for an image file (by ID) at creation time. */
export interface MessageImageFileParam {
  /** File ID for the uploaded image. */
  fileId: string;
  /**
   * Specifies the requested detail level for the image.
   *
   * Possible values: "auto", "low", "high"
   */
  detail?: ImageDetailLevel;
}

/** Creation-time image-URL block. */
export interface MessageImageUrlBlockInput extends MessageContentBlockInputParent {
  /** Always 'image_url'. */
  type: "image_url";
  /** References an external image by URL. */
  imageUrl: MessageImageUrlParam;
}

/** Parameter for an external image URL at creation time. */
export interface MessageImageUrlParam {
  /** The externally accessible image URL. */
  url: string;
  /**
   * Specifies the requested detail level for the image. Default is 'auto'.
   *
   * Possible values: "auto", "low", "high"
   */
  detail?: ImageDetailLevel;
}

/** This describes to which tools a file has been attached. */
export interface MessageAttachment {
  /** The ID of the file to attach to the message. */
  fileId?: string;
  /** Azure asset ID. */
  dataSource?: VectorStoreDataSource;
  /** The tools to add to this file. */
  tools: MessageAttachmentToolDefinition[];
}

/** The details used to update an existing agent thread */
export interface UpdateAgentThreadOptions {
  /**
   * A set of resources that are made available to the agent's tools in this thread. The resources are specific to the
   * type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires
   * a list of vector store IDs
   */
  toolResources?: ToolResources | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** The details used when creating a new run of an agent thread. */
export interface CreateRunOptions {
  /** The ID of the agent that should run the thread. */
  assistantId: string;
  /** The overridden model name that the agent should use to run the thread. */
  model?: string | null;
  /** The overridden system instructions that the agent should use to run the thread. */
  instructions?: string | null;
  /**
   * Additional instructions to append at the end of the instructions for the run. This is useful for modifying the behavior
   * on a per-run basis without overriding other instructions.
   */
  additionalInstructions?: string | null;
  /** Adds additional messages to the thread before creating the run. */
  additionalMessages?: Array<ThreadMessageOptions> | null;
  /** The overridden list of enabled tools that the agent should use to run the thread. */
  tools?: Array<ToolDefinition> | null;
  /**
   * If `true`, returns a stream of events that happen during the Run as server-sent events,
   * terminating when the Run enters a terminal state with a `data: [DONE]` message.
   */
  stream?: boolean;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output
   * more random, while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature?: number | null;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model
   * considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens
   * comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or temperature but not both.
   */
  topP?: number | null;
  /**
   * The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only
   * the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified,
   * the run will end with status `incomplete`. See `incomplete_details` for more info.
   */
  maxPromptTokens?: number | null;
  /**
   * The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort
   * to use only the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of
   * completion tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
   */
  maxCompletionTokens?: number | null;
  /** The strategy to use for dropping messages as the context windows moves forward. */
  truncationStrategy?: TruncationObject | null;
  /** Controls whether or not and which tool is called by the model. */
  toolChoice?: AgentsApiToolChoiceOption | null;
  /** Specifies the format that the model must output. */
  responseFormat?: AgentsApiResponseFormatOption | null;
  /** If `true` functions will run in parallel during tool use. */
  parallelToolCalls?: boolean;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/**
 * Controls for how a thread will be truncated prior to the run. Use this to control the initial
 * context window of the run.
 */
export interface TruncationObject {
  /**
   * The truncation strategy to use for the thread. The default is `auto`. If set to `last_messages`, the thread will
   * be truncated to the `lastMessages` count most recent messages in the thread. When set to `auto`, messages in the middle of the thread
   * will be dropped to fit the context length of the model, `max_prompt_tokens`.
   *
   * Possible values: "auto", "last_messages"
   */
  type: TruncationStrategy;
  /** The number of most recent messages from the thread when constructing the context for the run. */
  lastMessages?: number | null;
}

/** Specifies a tool the model should use. Use to force the model to call a specific tool. */
export interface AgentsNamedToolChoice {
  /**
   * the type of tool. If type is `function`, the function name must be set.
   *
   * Possible values: "function", "code_interpreter", "file_search", "bing_grounding", "fabric_dataagent", "sharepoint_grounding", "azure_ai_search"
   */
  type: AgentsNamedToolChoiceType;
  /** The name of the function to call */
  function?: FunctionName;
}

/** The function name that will be used, if using the `function` tool */
export interface FunctionName {
  /** The name of the function to call */
  name: string;
}

/**
 * Request object. A set of resources that are used by the agent's tools. The resources are specific to the type of tool.
 * For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of
 * vector store IDs.
 */
export interface UpdateToolResourcesOptions {
  /**
   * Overrides the list of file IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files
   * associated with the tool.
   */
  codeInterpreter?: UpdateCodeInterpreterToolResourceOptions;
  /** Overrides the vector store attached to this agent. There can be a maximum of 1 vector store attached to the agent. */
  fileSearch?: UpdateFileSearchToolResourceOptions;
  /** Overrides the resources to be used by the `azure_ai_search` tool consisting of index IDs and names. */
  azureAISearch?: AzureAISearchResource;
  /** Overrides the resources to be used by the `azure_function` tool consisting of connection IDs. */
  azureFunction?: AzureFunctionToolResource;
}

/** Request object to update `code_interpreted` tool resources. */
export interface UpdateCodeInterpreterToolResourceOptions {
  /** A list of file IDs to override the current list of the agent. */
  fileIds?: string[];
}

/** Request object to update `file_search` tool resources. */
export interface UpdateFileSearchToolResourceOptions {
  /** A list of vector store IDs to override the current list of the agent. */
  vectorStoreIds?: string[];
}

/** The data provided during a tool outputs submission to resolve pending tool calls and allow the model to continue. */
export interface ToolOutput {
  /** The ID of the tool call being resolved, as provided in the tool calls of a required action from a run. */
  toolCallId?: string;
  /** The output from the tool to be submitted. */
  output?: string;
}

/** The details used when creating and immediately running a new agent thread. */
export interface CreateAndRunThreadOptions {
  /** The ID of the agent for which the thread should be created. */
  assistantId: string;
  /** The details used to create the new thread. If no thread is provided, an empty one will be created. */
  thread?: AgentThreadCreationOptions;
  /** The overridden model that the agent should use to run the thread. */
  model?: string | null;
  /** The overridden system instructions the agent should use to run the thread. */
  instructions?: string | null;
  /** The overridden list of enabled tools the agent should use to run the thread. */
  tools?: Array<ToolDefinition> | null;
  /** Override the tools the agent can use for this run. This is useful for modifying the behavior on a per-run basis */
  toolResources?: UpdateToolResourcesOptions | null;
  /**
   * If `true`, returns a stream of events that happen during the Run as server-sent events,
   * terminating when the Run enters a terminal state with a `data: [DONE]` message.
   */
  stream?: boolean;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output
   * more random, while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature?: number | null;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model
   * considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens
   * comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or temperature but not both.
   */
  topP?: number | null;
  /**
   * The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only
   * the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified,
   * the run will end with status `incomplete`. See `incomplete_details` for more info.
   */
  maxPromptTokens?: number | null;
  /**
   * The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only
   * the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of completion tokens
   * specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
   */
  maxCompletionTokens?: number | null;
  /** The strategy to use for dropping messages as the context windows moves forward. */
  truncationStrategy?: TruncationObject | null;
  /** Controls whether or not and which tool is called by the model. */
  toolChoice?: AgentsApiToolChoiceOption | null;
  /** Specifies the format that the model must output. */
  responseFormat?: AgentsApiResponseFormatOption | null;
  /** If `true` functions will run in parallel during tool use. */
  parallelToolCalls?: boolean;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** The expiration policy for a vector store. */
export interface VectorStoreExpirationPolicy {
  /**
   * Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`.
   *
   * Possible values: "last_active_at"
   */
  anchor: VectorStoreExpirationPolicyAnchor;
  /** The anchor timestamp after which the expiration policy applies. */
  days: number;
}

/** Request object for creating a vector store. */
export interface VectorStoreOptions {
  /** A list of file IDs that the vector store should use. Useful for tools like `file_search` that can access files. */
  fileIds?: string[];
  /** The name of the vector store. */
  name?: string;
  /** The vector store configuration, used when vector store is created from Azure asset URIs. */
  configuration?: VectorStoreConfiguration;
  /** Details on when this vector store expires */
  expiresAfter?: VectorStoreExpirationPolicy;
  /** The chunking strategy used to chunk the file(s). If not set, will use the auto strategy. Only applicable if file_ids is non-empty. */
  chunkingStrategy?: VectorStoreChunkingStrategyRequest;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** An abstract representation of a vector store chunking strategy configuration. */
export interface VectorStoreChunkingStrategyRequestParent {
  type: VectorStoreChunkingStrategyRequestType;
}

/** The default strategy. This strategy currently uses a max_chunk_size_tokens of 800 and chunk_overlap_tokens of 400. */
export interface VectorStoreAutoChunkingStrategyRequest
  extends VectorStoreChunkingStrategyRequestParent {
  /** The object type, which is always 'auto'. */
  type: "auto";
}

/** A statically configured chunking strategy. */
export interface VectorStoreStaticChunkingStrategyRequest
  extends VectorStoreChunkingStrategyRequestParent {
  /** The object type, which is always 'static'. */
  type: "static";
  /** The options for the static chunking strategy. */
  static: VectorStoreStaticChunkingStrategyOptions;
}

/** Options to configure a vector store static chunking strategy. */
export interface VectorStoreStaticChunkingStrategyOptions {
  /** The maximum number of tokens in each chunk. The default value is 800. The minimum value is 100 and the maximum value is 4096. */
  maxChunkSizeTokens: number;
  /**
   * The number of tokens that overlap between chunks. The default value is 400.
   * Note that the overlap must not exceed half of max_chunk_size_tokens.
   */
  chunkOverlapTokens: number;
}

/** Request object for updating a vector store. */
export interface VectorStoreUpdateOptions {
  /** The name of the vector store. */
  name?: string | null;
  /** Details on when this vector store expires */
  expiresAfter?: VectorStoreExpirationPolicy | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** Evaluation Definition */
export interface Evaluation {
  /** Data for evaluation. */
  data: InputData;
  /** Display Name for evaluation. It helps to find the evaluation easily in AI Foundry. It does not need to be unique. */
  displayName?: string;
  /** Description of the evaluation. It can be used to store additional information about the evaluation and is mutable. */
  description?: string;
  /** Evaluation's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Evaluation's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Evaluators to be used for the evaluation. */
  evaluators: Record<string, EvaluatorConfiguration>;
}

/** Abstract data class for input data configuration. */
export interface InputDataParent {
  type: string;
}

/** Data Source for Application Insights. */
export interface ApplicationInsightsConfiguration extends InputDataParent {
  /** LogAnalytic Workspace resourceID associated with ApplicationInsights */
  resourceId: string;
  /** Query to fetch the data. */
  query: string;
  /** Service name. */
  serviceName: string;
  /** Connection String to connect to ApplicationInsights. */
  connectionString?: string;
}

/** Dataset as source for evaluation. */
export interface Dataset extends InputDataParent {
  /** Evaluation input data */
  id: string;
}

/** Target for the evaluation process. */
export interface EvaluationTarget {
  /** System message related to the evaluation target. */
  systemMessage: string;
  /** Model configuration for the evaluation. */
  modelConfig: TargetModelConfig;
  /** A dictionary of parameters for the model. */
  modelParams?: Record<string, unknown>;
}

/** Abstract class for model configuration. */
export interface TargetModelConfigParent {
  type: string;
}

/** Azure OpenAI model configuration. The API version would be selected by the service for querying the model. */
export interface AoaiModelConfig extends TargetModelConfigParent {
  /** Endpoint targetURI for AOAI model. */
  azureEndpoint: string;
  /** API Key for AOAI model. */
  apiKey: string;
  /** Deployment name for AOAI model. */
  azureDeployment: string;
}

/** MaaS model configuration. The API version would be selected by the service for querying the model. */
export interface MaasModelConfig extends TargetModelConfigParent {
  /** Endpoint targetURI for MAAS model. */
  azureEndpoint: string;
  /** API Key for MAAS model. */
  apiKey: string;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {}

/** Evaluator Configuration */
export interface EvaluatorConfiguration {
  /** Identifier of the evaluator. */
  id: string;
  /** Initialization parameters of the evaluator. */
  initParams?: Record<string, unknown>;
  /** Data parameters of the evaluator. */
  dataMapping?: Record<string, string>;
}

/** Evaluation Schedule Definition */
export interface EvaluationSchedule {
  /** Data for evaluation. */
  data: ApplicationInsightsConfiguration;
  /** Description of the evaluation. It can be used to store additional information about the evaluation and is mutable. */
  description?: string;
  /** Evaluation's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Evaluation's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Evaluators to be used for the evaluation. */
  evaluators: Record<string, EvaluatorConfiguration>;
  /** Trigger for the evaluation. */
  trigger: Trigger;
}

/** Abstract data class for input data configuration. */
export interface TriggerParent {
  type: string;
}

/** Recurrence Trigger Definition */
export interface RecurrenceTrigger extends TriggerParent {
  /**
   * The frequency to trigger schedule.
   *
   * Possible values: "Month", "Week", "Day", "Hour", "Minute"
   */
  frequency: Frequency;
  /** Specifies schedule interval in conjunction with frequency */
  interval: number;
  /** The recurrence schedule. */
  schedule?: RecurrenceSchedule;
}

/** RecurrenceSchedule Definition */
export interface RecurrenceSchedule {
  /** List of hours for the schedule. */
  hours: number[];
  /** List of minutes for the schedule. */
  minutes: number[];
  /** List of days for the schedule. */
  weekDays?: WeekDays[];
  /** List of month days for the schedule */
  monthDays?: number[];
}

/** Cron Trigger Definition */
export interface CronTrigger extends TriggerParent {
  /** Cron expression for the trigger. */
  expression: string;
}

/** An abstract representation of an input tool definition that an agent can use. */
export type ToolDefinition =
  | ToolDefinitionParent
  | CodeInterpreterToolDefinition
  | FileSearchToolDefinition
  | FunctionToolDefinition
  | BingGroundingToolDefinition
  | MicrosoftFabricToolDefinition
  | SharepointToolDefinition
  | AzureAISearchToolDefinition
  | OpenApiToolDefinition
  | BingCustomSearchToolDefinition
  | AzureFunctionToolDefinition;
/** authentication details for OpenApiFunctionDefinition */
export type OpenApiAuthDetails =
  | OpenApiAuthDetailsParent
  | OpenApiAnonymousAuthDetails
  | OpenApiConnectionAuthDetails
  | OpenApiManagedAuthDetails;
/** Defines a single content block when creating a message. The 'type' field determines whether it is text, an image file, or an external image URL, etc. */
export type MessageContentBlockInput =
  | MessageContentBlockInputParent
  | MessageTextBlockInput
  | MessageImageFileBlockInput
  | MessageImageUrlBlockInput;
/** An abstract representation of a vector store chunking strategy configuration. */
export type VectorStoreChunkingStrategyRequest =
  | VectorStoreChunkingStrategyRequestParent
  | VectorStoreAutoChunkingStrategyRequest
  | VectorStoreStaticChunkingStrategyRequest;
/** Abstract data class for input data configuration. */
export type InputData = InputDataParent | ApplicationInsightsConfiguration | Dataset;
/** Abstract class for model configuration. */
export type TargetModelConfig = TargetModelConfigParent | AoaiModelConfig | MaasModelConfig;
/** Abstract data class for input data configuration. */
export type Trigger = TriggerParent | RecurrenceTrigger | CronTrigger;
/** Alias for OpenApiAuthType */
export type OpenApiAuthType = string;
/** Alias for VectorStoreDataSourceAssetType */
export type VectorStoreDataSourceAssetType = string;
/** Alias for AzureAISearchQueryType */
export type AzureAISearchQueryType = string;
/** Alias for AgentsApiResponseFormatMode */
export type AgentsApiResponseFormatMode = string;
/** Alias for ResponseFormat */
export type ResponseFormat = string;
/** Alias for AgentsApiResponseFormatOption */
export type AgentsApiResponseFormatOption =
  | string
  | AgentsApiResponseFormatMode
  | AgentsApiResponseFormat
  | ResponseFormatJsonSchemaType;
/** Alias for ListSortOrder */
export type ListSortOrder = string;
/** Alias for MessageRole */
export type MessageRole = string;
/** Alias for MessageBlockType */
export type MessageBlockType = string;
/** Alias for ImageDetailLevel */
export type ImageDetailLevel = string;
/** Alias for CreateMessageContent */
export type CreateMessageContent = string | Array<MessageContentBlockInput>;
/** Alias for MessageAttachmentToolDefinition */
export type MessageAttachmentToolDefinition =
  | CodeInterpreterToolDefinition
  | FileSearchToolDefinition;
/** Alias for RunAdditionalFieldList */
export type RunAdditionalFieldList = string;
/** Alias for TruncationStrategy */
export type TruncationStrategy = string;
/** Alias for AgentsApiToolChoiceOptionMode */
export type AgentsApiToolChoiceOptionMode = string;
/** Alias for AgentsNamedToolChoiceType */
export type AgentsNamedToolChoiceType = string;
/** Alias for AgentsApiToolChoiceOption */
export type AgentsApiToolChoiceOption =
  | string
  | AgentsApiToolChoiceOptionMode
  | AgentsNamedToolChoice;
/** Alias for FilePurpose */
export type FilePurpose = string;
/** Alias for VectorStoreExpirationPolicyAnchor */
export type VectorStoreExpirationPolicyAnchor = string;
/** Alias for VectorStoreChunkingStrategyRequestType */
export type VectorStoreChunkingStrategyRequestType = string;
/** Alias for VectorStoreFileStatusFilter */
export type VectorStoreFileStatusFilter = string;
/** Alias for ConnectionType */
export type ConnectionType = string;
/** Alias for Frequency */
export type Frequency = string;
/** Alias for WeekDays */
export type WeekDays = string;
