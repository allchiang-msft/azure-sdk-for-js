// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { AzureKeyCredential } from "@azure/core-auth";
export {
  AutocompleteItem,
  AutocompleteMode,
  AutocompleteResult,
  DebugInfo,
  FacetResult,
  HybridCountAndFacetMode,
  HybridSearch as HybridSearchOptions,
  IndexActionType,
  IndexDocumentsResult,
  IndexingResult,
  KnownHybridCountAndFacetMode,
  KnownQueryDebugMode,
  KnownQueryLanguage,
  KnownQuerySpellerType as KnownQuerySpeller,
  KnownSemanticErrorMode,
  KnownSemanticErrorReason,
  KnownSemanticFieldState,
  KnownSemanticQueryRewritesResultType,
  KnownSemanticSearchResultsType,
  KnownVectorFilterMode,
  KnownVectorQueryKind,
  KnownVectorThresholdKind,
  QueryAnswerResult,
  QueryCaptionResult,
  QueryDebugMode,
  QueryLanguage,
  QueryResultDocumentRerankerInput,
  QueryResultDocumentSubscores,
  QueryRewritesDebugInfo,
  QueryRewritesValuesDebugInfo,
  QuerySpellerType as QuerySpeller,
  QueryType,
  ScoringStatistics,
  SearchMode,
  SemanticFieldState,
  SemanticQueryRewritesResultType,
  SingleVectorFieldResult,
  TextResult,
  VectorsDebugInfo,
} from "./generated/data/models/index.js";
export {
  AIServicesAccountKey,
  AIStudioModelCatalogName,
  AnalyzedTokenInfo,
  AnalyzeResult,
  AsciiFoldingTokenFilter,
  AzureActiveDirectoryApplicationCredentials,
  AzureMachineLearningSkill,
  AzureOpenAIModelName,
  AzureOpenAITokenizerParameters,
  BinaryQuantizationCompression,
  BM25Similarity,
  CharFilter as BaseCharFilter,
  CharFilterName,
  CjkBigramTokenFilter,
  CjkBigramTokenFilterScripts,
  ClassicSimilarity,
  ClassicTokenizer,
  CognitiveServicesAccount as BaseCognitiveServicesAccount,
  CognitiveServicesAccountKey,
  CommonGramTokenFilter,
  ConditionalSkill,
  CorsOptions,
  CustomEntity,
  CustomEntityAlias,
  CustomNormalizer,
  DataChangeDetectionPolicy as BaseDataChangeDetectionPolicy,
  DataDeletionDetectionPolicy as BaseDataDeletionDetectionPolicy,
  DefaultCognitiveServicesAccount,
  DictionaryDecompounderTokenFilter,
  DistanceScoringFunction,
  DistanceScoringParameters,
  DocumentExtractionSkill,
  DocumentIntelligenceLayoutSkillMarkdownHeaderDepth,
  DocumentIntelligenceLayoutSkillOutputMode,
  EdgeNGramTokenFilterSide,
  EdgeNGramTokenizer,
  ElisionTokenFilter,
  EntityLinkingSkill,
  EntityRecognitionSkillV3,
  FieldMapping,
  FieldMappingFunction,
  FreshnessScoringFunction,
  FreshnessScoringParameters,
  HighWaterMarkChangeDetectionPolicy,
  IndexerExecutionResult,
  IndexerExecutionStatus,
  IndexerExecutionStatusDetail,
  IndexerState,
  IndexerStatus,
  IndexingMode,
  IndexingSchedule,
  IndexProjectionMode,
  InputFieldMappingEntry,
  KeepTokenFilter,
  KeywordMarkerTokenFilter,
  KnownAIStudioModelCatalogName,
  KnownAzureOpenAIModelName,
  KnownBlobIndexerDataToExtract,
  KnownBlobIndexerImageAction,
  KnownBlobIndexerParsingMode,
  KnownBlobIndexerPDFTextRotationAlgorithm,
  KnownCustomEntityLookupSkillLanguage,
  KnownDocumentIntelligenceLayoutSkillMarkdownHeaderDepth,
  KnownDocumentIntelligenceLayoutSkillOutputMode,
  KnownEntityCategory,
  KnownEntityRecognitionSkillLanguage,
  KnownImageAnalysisSkillLanguage,
  KnownImageDetail,
  KnownIndexerExecutionEnvironment,
  KnownIndexerExecutionStatusDetail,
  KnownIndexingMode,
  KnownIndexProjectionMode,
  KnownKeyPhraseExtractionSkillLanguage,
  KnownLexicalAnalyzerName,
  KnownLexicalNormalizerName,
  KnownLexicalNormalizerName as KnownNormalizerNames,
  KnownMarkdownHeaderDepth,
  KnownMarkdownParsingSubmode,
  KnownOcrLineEnding,
  KnownOcrSkillLanguage,
  KnownPIIDetectionSkillMaskingMode,
  KnownRegexFlags,
  KnownSearchFieldDataType,
  KnownSearchIndexerDataSourceType,
  KnownSentimentSkillLanguage,
  KnownSplitSkillEncoderModelName,
  KnownSplitSkillLanguage,
  KnownSplitSkillUnit,
  KnownTextSplitMode,
  KnownTextTranslationSkillLanguage,
  KnownVectorEncodingFormat,
  KnownVectorSearchAlgorithmKind,
  KnownVectorSearchAlgorithmMetric,
  KnownVectorSearchCompressionKind,
  KnownVectorSearchCompressionRescoreStorageMethod,
  KnownVectorSearchCompressionTarget,
  KnownVectorSearchVectorizerKind,
  KnownVisualFeature,
  LanguageDetectionSkill,
  LengthTokenFilter,
  LexicalAnalyzer as BaseLexicalAnalyzer,
  LexicalAnalyzerName,
  LexicalNormalizer as BaseLexicalNormalizer,
  LexicalNormalizerName,
  LexicalTokenizer as BaseLexicalTokenizer,
  LexicalTokenizerName,
  LimitTokenFilter,
  LuceneStandardAnalyzer,
  MagnitudeScoringFunction,
  MagnitudeScoringParameters,
  MappingCharFilter,
  MarkdownHeaderDepth,
  MarkdownParsingSubmode,
  MergeSkill,
  MicrosoftLanguageStemmingTokenizer,
  MicrosoftLanguageTokenizer,
  MicrosoftStemmingTokenizerLanguage,
  MicrosoftTokenizerLanguage,
  NativeBlobSoftDeleteDeletionDetectionPolicy,
  NGramTokenizer,
  OcrLineEnding,
  OutputFieldMappingEntry,
  PathHierarchyTokenizerV2 as PathHierarchyTokenizer,
  PatternCaptureTokenFilter,
  PatternReplaceCharFilter,
  PatternReplaceTokenFilter,
  PhoneticEncoder,
  PhoneticTokenFilter,
  RescoringOptions,
  ResourceCounter,
  ScalarQuantizationCompression,
  ScalarQuantizationParameters,
  ScoringFunction as BaseScoringFunction,
  ScoringFunctionAggregation,
  ScoringFunctionInterpolation,
  SearchAlias,
  SearchIndexerDataContainer,
  SearchIndexerDataIdentity as BaseSearchIndexerDataIdentity,
  SearchIndexerDataNoneIdentity,
  SearchIndexerDataUserAssignedIdentity,
  SearchIndexerError,
  SearchIndexerIndexProjectionSelector,
  SearchIndexerKnowledgeStoreBlobProjectionSelector,
  SearchIndexerKnowledgeStoreFileProjectionSelector,
  SearchIndexerKnowledgeStoreObjectProjectionSelector,
  SearchIndexerKnowledgeStoreProjection,
  SearchIndexerKnowledgeStoreProjectionSelector,
  SearchIndexerKnowledgeStoreTableProjectionSelector,
  SearchIndexerLimits,
  SearchIndexerSkill as BaseSearchIndexerSkill,
  SearchIndexerStatus,
  SearchIndexerWarning,
  SemanticConfiguration,
  SemanticField,
  SemanticPrioritizedFields,
  SemanticSearch,
  SentimentSkillV3,
  ServiceCounters,
  ServiceLimits,
  ShaperSkill,
  ShingleTokenFilter,
  Similarity,
  SnowballTokenFilter,
  SnowballTokenFilterLanguage,
  SoftDeleteColumnDeletionDetectionPolicy,
  SplitSkillEncoderModelName,
  SplitSkillUnit,
  SqlIntegratedChangeTrackingPolicy,
  StemmerOverrideTokenFilter,
  StemmerTokenFilter,
  StemmerTokenFilterLanguage,
  StopAnalyzer,
  StopwordsList,
  StopwordsTokenFilter,
  Suggester as SearchSuggester,
  SynonymTokenFilter,
  TagScoringFunction,
  TagScoringParameters,
  TextWeights,
  TokenCharacterKind,
  TokenFilter as BaseTokenFilter,
  TokenFilterName,
  TruncateTokenFilter,
  UaxUrlEmailTokenizer,
  UniqueTokenFilter,
  VectorEncodingFormat,
  VectorSearchCompression as BaseVectorSearchCompression,
  VectorSearchCompressionKind,
  VectorSearchCompressionRescoreStorageMethod,
  VectorSearchCompressionTarget,
  VectorSearchProfile,
  VectorSearchVectorizerKind,
  WordDelimiterTokenFilter,
} from "./generated/service/models/index.js";
export { default as GeographyPoint } from "./geographyPoint.js";
export { IndexDocumentsBatch } from "./indexDocumentsBatch.js";
export {
  AutocompleteOptions,
  AutocompleteRequest,
  BaseSearchRequestOptions,
  BaseVectorQuery,
  BaseVectorThreshold,
  CountDocumentsOptions,
  DeleteDocumentsOptions,
  DocumentDebugInfo,
  ExcludedODataTypes,
  ExtractDocumentKey,
  ExtractiveQueryAnswer,
  ExtractiveQueryCaption,
  GenerativeQueryRewrites,
  GetDocumentOptions,
  IndexDocumentsAction,
  IndexDocumentsOptions,
  ListSearchResultsPageSettings,
  MergeDocumentsOptions,
  MergeOrUploadDocumentsOptions,
  NarrowedModel,
  QueryAnswer,
  QueryCaption,
  QueryResultDocumentSemanticField,
  QueryRewrites,
  SearchDocumentsPageResult,
  SearchDocumentsResult,
  SearchDocumentsResultBase,
  SearchFieldArray,
  SearchIndexingBufferedSenderDeleteDocumentsOptions,
  SearchIndexingBufferedSenderFlushDocumentsOptions,
  SearchIndexingBufferedSenderMergeDocumentsOptions,
  SearchIndexingBufferedSenderMergeOrUploadDocumentsOptions,
  SearchIndexingBufferedSenderOptions,
  SearchIndexingBufferedSenderUploadDocumentsOptions,
  SearchIterator,
  SearchOptions,
  SearchPick,
  SearchRequestOptions,
  SearchRequestQueryTypeOptions,
  SearchResult,
  SearchScoreThreshold,
  SelectArray,
  SelectFields,
  SemanticDebugInfo,
  SemanticErrorMode,
  SemanticErrorReason,
  SemanticSearchOptions,
  SemanticSearchResultsType,
  SuggestDocumentsResult,
  SuggestNarrowedModel,
  SuggestOptions,
  SuggestRequest,
  SuggestResult,
  UnionToIntersection,
  UploadDocumentsOptions,
  VectorFilterMode,
  VectorizableImageBinaryQuery,
  VectorizableImageUrlQuery,
  VectorizableTextQuery,
  VectorizedQuery,
  VectorQuery,
  VectorQueryKind,
  VectorSearchOptions,
  VectorSimilarityThreshold,
  VectorThreshold,
} from "./indexModels.js";
export { odata } from "./odata.js";
export { KnownSearchAudience } from "./searchAudience.js";
export { SearchClient, SearchClientOptions } from "./searchClient.js";
export { SearchIndexClient, SearchIndexClientOptions } from "./searchIndexClient.js";
export { SearchIndexerClient, SearchIndexerClientOptions } from "./searchIndexerClient.js";
export {
  DEFAULT_BATCH_SIZE,
  DEFAULT_FLUSH_WINDOW,
  DEFAULT_RETRY_COUNT,
  IndexDocumentsClient,
  SearchIndexingBufferedSender,
} from "./searchIndexingBufferedSender.js";
export {
  AIServicesAccountIdentity,
  AIServicesVisionParameters,
  AIServicesVisionVectorizer,
  AliasIterator,
  AnalyzeRequest,
  AnalyzeTextOptions,
  AzureMachineLearningVectorizer,
  AzureMachineLearningVectorizerParameters,
  AzureOpenAIEmbeddingSkill,
  AzureOpenAIParameters,
  AzureOpenAIVectorizer,
  BaseAzureMachineLearningVectorizerParameters,
  BaseVectorSearchAlgorithmConfiguration,
  BaseVectorSearchVectorizer,
  BlobIndexerDataToExtract,
  BlobIndexerImageAction,
  BlobIndexerParsingMode,
  BlobIndexerPDFTextRotationAlgorithm,
  CharFilter,
  CognitiveServicesAccount,
  ComplexDataType,
  ComplexField,
  CreateAliasOptions,
  CreateDataSourceConnectionOptions,
  CreateIndexerOptions,
  CreateIndexOptions,
  CreateOrUpdateAliasOptions,
  CreateorUpdateDataSourceConnectionOptions,
  CreateorUpdateIndexerOptions,
  CreateOrUpdateIndexOptions,
  CreateOrUpdateSkillsetOptions,
  CreateOrUpdateSynonymMapOptions,
  CreateSkillsetOptions,
  CreateSynonymMapOptions,
  CustomAnalyzer,
  CustomEntityLookupSkill,
  CustomEntityLookupSkillLanguage,
  DataChangeDetectionPolicy,
  DataDeletionDetectionPolicy,
  DeleteAliasOptions,
  DeleteDataSourceConnectionOptions,
  DeleteIndexerOptions,
  DeleteIndexOptions,
  DeleteSkillsetOptions,
  DeleteSynonymMapOptions,
  DocumentIntelligenceLayoutSkill,
  EdgeNGramTokenFilter,
  EntityCategory,
  EntityRecognitionSkill,
  EntityRecognitionSkillLanguage,
  ExhaustiveKnnAlgorithmConfiguration,
  ExhaustiveKnnParameters,
  GetAliasOptions,
  GetDataSourceConnectionOptions,
  GetIndexerOptions,
  GetIndexerStatusOptions,
  GetIndexOptions,
  GetIndexStatisticsOptions,
  GetServiceStatisticsOptions,
  GetSkillSetOptions,
  GetSynonymMapsOptions,
  HnswAlgorithmConfiguration,
  HnswParameters,
  ImageAnalysisSkill,
  ImageAnalysisSkillLanguage,
  ImageDetail,
  IndexerExecutionEnvironment,
  IndexingParameters,
  IndexingParametersConfiguration,
  IndexIterator,
  IndexNameIterator,
  KeyAuthAzureMachineLearningVectorizerParameters,
  KeyPhraseExtractionSkill,
  KeyPhraseExtractionSkillLanguage,
  KeywordTokenizer,
  KnownAnalyzerNames,
  KnownCharFilterNames,
  KnownTokenFilterNames,
  KnownTokenizerNames,
  LexicalAnalyzer,
  LexicalNormalizer,
  LexicalTokenizer,
  ListAliasesOptions,
  ListDataSourceConnectionsOptions,
  ListIndexersOptions,
  ListIndexesOptions,
  ListSkillsetsOptions,
  ListSynonymMapsOptions,
  LuceneStandardTokenizer,
  NGramTokenFilter,
  NoAuthAzureMachineLearningVectorizerParameters,
  OcrSkill,
  OcrSkillLanguage,
  PatternAnalyzer,
  PatternTokenizer,
  PIIDetectionSkill,
  PIIDetectionSkillMaskingMode,
  RegexFlags,
  ResetDocumentsOptions,
  ResetIndexerOptions,
  ResetSkillsOptions,
  RunIndexerOptions,
  ScoringFunction,
  ScoringProfile,
  SearchField,
  SearchFieldDataType,
  SearchIndex,
  SearchIndexAlias,
  SearchIndexer,
  SearchIndexerCache,
  SearchIndexerDataIdentity,
  SearchIndexerDataSourceConnection,
  SearchIndexerDataSourceType,
  SearchIndexerIndexProjection,
  SearchIndexerIndexProjectionParameters,
  SearchIndexerKnowledgeStore,
  SearchIndexerKnowledgeStoreParameters,
  SearchIndexerSkill,
  SearchIndexerSkillset,
  SearchIndexStatistics,
  SearchResourceEncryptionKey,
  SearchServiceStatistics,
  SentimentSkill,
  SentimentSkillLanguage,
  SimilarityAlgorithm,
  SimpleField,
  SplitSkill,
  SplitSkillLanguage,
  SynonymMap,
  TextSplitMode,
  TextTranslationSkill,
  TextTranslationSkillLanguage,
  TokenAuthAzureMachineLearningVectorizerParameters,
  TokenFilter,
  VectorSearch,
  VectorSearchAlgorithmConfiguration,
  VectorSearchAlgorithmKind,
  VectorSearchAlgorithmMetric,
  VectorSearchCompression,
  VectorSearchVectorizer,
  VisionVectorizeSkill,
  VisualFeature,
  WebApiParameters,
  WebApiSkill,
  WebApiVectorizer,
} from "./serviceModels.js";
export { createSynonymMapFromFile } from "./synonymMapHelper.js";
