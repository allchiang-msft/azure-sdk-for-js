/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  AnnotationsImpl,
  APIKeysImpl,
  ExportConfigurationsImpl,
  ComponentCurrentBillingFeaturesImpl,
  ComponentQuotaStatusImpl,
  ComponentFeatureCapabilitiesImpl,
  ComponentAvailableFeaturesImpl,
  ProactiveDetectionConfigurationsImpl,
  WorkItemConfigurationsImpl,
  FavoritesImpl,
  WebTestLocationsImpl,
  WebTestsImpl,
  AnalyticsItemsImpl,
  WorkbookTemplatesImpl,
  MyWorkbooksImpl,
  WorkbooksImpl,
  ComponentsImpl,
  ComponentLinkedStorageAccountsOperationsImpl,
  LiveTokenImpl
} from "./operations";
import {
  Annotations,
  APIKeys,
  ExportConfigurations,
  ComponentCurrentBillingFeatures,
  ComponentQuotaStatus,
  ComponentFeatureCapabilities,
  ComponentAvailableFeatures,
  ProactiveDetectionConfigurations,
  WorkItemConfigurations,
  Favorites,
  WebTestLocations,
  WebTests,
  AnalyticsItems,
  WorkbookTemplates,
  MyWorkbooks,
  Workbooks,
  Components,
  ComponentLinkedStorageAccountsOperations,
  LiveToken
} from "./operationsInterfaces";
import { ApplicationInsightsManagementClientOptionalParams } from "./models";

export class ApplicationInsightsManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the ApplicationInsightsManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: ApplicationInsightsManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: ApplicationInsightsManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-appinsights/5.0.0-beta.3`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.annotations = new AnnotationsImpl(this);
    this.aPIKeys = new APIKeysImpl(this);
    this.exportConfigurations = new ExportConfigurationsImpl(this);
    this.componentCurrentBillingFeatures = new ComponentCurrentBillingFeaturesImpl(
      this
    );
    this.componentQuotaStatus = new ComponentQuotaStatusImpl(this);
    this.componentFeatureCapabilities = new ComponentFeatureCapabilitiesImpl(
      this
    );
    this.componentAvailableFeatures = new ComponentAvailableFeaturesImpl(this);
    this.proactiveDetectionConfigurations = new ProactiveDetectionConfigurationsImpl(
      this
    );
    this.workItemConfigurations = new WorkItemConfigurationsImpl(this);
    this.favorites = new FavoritesImpl(this);
    this.webTestLocations = new WebTestLocationsImpl(this);
    this.webTests = new WebTestsImpl(this);
    this.analyticsItems = new AnalyticsItemsImpl(this);
    this.workbookTemplates = new WorkbookTemplatesImpl(this);
    this.myWorkbooks = new MyWorkbooksImpl(this);
    this.workbooks = new WorkbooksImpl(this);
    this.components = new ComponentsImpl(this);
    this.componentLinkedStorageAccountsOperations = new ComponentLinkedStorageAccountsOperationsImpl(
      this
    );
    this.liveToken = new LiveTokenImpl(this);
  }

  annotations: Annotations;
  aPIKeys: APIKeys;
  exportConfigurations: ExportConfigurations;
  componentCurrentBillingFeatures: ComponentCurrentBillingFeatures;
  componentQuotaStatus: ComponentQuotaStatus;
  componentFeatureCapabilities: ComponentFeatureCapabilities;
  componentAvailableFeatures: ComponentAvailableFeatures;
  proactiveDetectionConfigurations: ProactiveDetectionConfigurations;
  workItemConfigurations: WorkItemConfigurations;
  favorites: Favorites;
  webTestLocations: WebTestLocations;
  webTests: WebTests;
  analyticsItems: AnalyticsItems;
  workbookTemplates: WorkbookTemplates;
  myWorkbooks: MyWorkbooks;
  workbooks: Workbooks;
  components: Components;
  componentLinkedStorageAccountsOperations: ComponentLinkedStorageAccountsOperations;
  liveToken: LiveToken;
}
