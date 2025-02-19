/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  WorkloadProtectableItemResource,
  BackupProtectableItemsListOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BackupProtectableItems. */
export interface BackupProtectableItems {
  /**
   * Provides a pageable list of protectable objects within your subscription according to the query
   * filter and the
   * pagination parameters.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  list(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupProtectableItemsListOptionalParams,
  ): PagedAsyncIterableIterator<WorkloadProtectableItemResource>;
}
