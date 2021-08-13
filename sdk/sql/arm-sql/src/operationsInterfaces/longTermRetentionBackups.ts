/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  LongTermRetentionBackup,
  LongTermRetentionBackupsListByDatabaseOptionalParams,
  LongTermRetentionBackupsListByLocationOptionalParams,
  LongTermRetentionBackupsListByServerOptionalParams,
  LongTermRetentionBackupsListByResourceGroupDatabaseOptionalParams,
  LongTermRetentionBackupsListByResourceGroupLocationOptionalParams,
  LongTermRetentionBackupsListByResourceGroupServerOptionalParams,
  CopyLongTermRetentionBackupParameters,
  LongTermRetentionBackupsCopyOptionalParams,
  LongTermRetentionBackupsCopyResponse,
  UpdateLongTermRetentionBackupParameters,
  LongTermRetentionBackupsUpdateOptionalParams,
  LongTermRetentionBackupsUpdateResponse,
  LongTermRetentionBackupsGetOptionalParams,
  LongTermRetentionBackupsGetResponse,
  LongTermRetentionBackupsDeleteOptionalParams,
  LongTermRetentionBackupsCopyByResourceGroupOptionalParams,
  LongTermRetentionBackupsCopyByResourceGroupResponse,
  LongTermRetentionBackupsUpdateByResourceGroupOptionalParams,
  LongTermRetentionBackupsUpdateByResourceGroupResponse,
  LongTermRetentionBackupsGetByResourceGroupOptionalParams,
  LongTermRetentionBackupsGetByResourceGroupResponse,
  LongTermRetentionBackupsDeleteByResourceGroupOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LongTermRetentionBackups. */
export interface LongTermRetentionBackups {
  /**
   * Lists all long term retention backups for a database.
   * @param locationName The location of the database
   * @param longTermRetentionServerName The name of the server
   * @param longTermRetentionDatabaseName The name of the database
   * @param options The options parameters.
   */
  listByDatabase(
    locationName: string,
    longTermRetentionServerName: string,
    longTermRetentionDatabaseName: string,
    options?: LongTermRetentionBackupsListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<LongTermRetentionBackup>;
  /**
   * Lists the long term retention backups for a given location.
   * @param locationName The location of the database
   * @param options The options parameters.
   */
  listByLocation(
    locationName: string,
    options?: LongTermRetentionBackupsListByLocationOptionalParams
  ): PagedAsyncIterableIterator<LongTermRetentionBackup>;
  /**
   * Lists the long term retention backups for a given server.
   * @param locationName The location of the database
   * @param longTermRetentionServerName The name of the server
   * @param options The options parameters.
   */
  listByServer(
    locationName: string,
    longTermRetentionServerName: string,
    options?: LongTermRetentionBackupsListByServerOptionalParams
  ): PagedAsyncIterableIterator<LongTermRetentionBackup>;
  /**
   * Lists all long term retention backups for a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database
   * @param longTermRetentionServerName The name of the server
   * @param longTermRetentionDatabaseName The name of the database
   * @param options The options parameters.
   */
  listByResourceGroupDatabase(
    resourceGroupName: string,
    locationName: string,
    longTermRetentionServerName: string,
    longTermRetentionDatabaseName: string,
    options?: LongTermRetentionBackupsListByResourceGroupDatabaseOptionalParams
  ): PagedAsyncIterableIterator<LongTermRetentionBackup>;
  /**
   * Lists the long term retention backups for a given location.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database
   * @param options The options parameters.
   */
  listByResourceGroupLocation(
    resourceGroupName: string,
    locationName: string,
    options?: LongTermRetentionBackupsListByResourceGroupLocationOptionalParams
  ): PagedAsyncIterableIterator<LongTermRetentionBackup>;
  /**
   * Lists the long term retention backups for a given server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database
   * @param longTermRetentionServerName The name of the server
   * @param options The options parameters.
   */
  listByResourceGroupServer(
    resourceGroupName: string,
    locationName: string,
    longTermRetentionServerName: string,
    options?: LongTermRetentionBackupsListByResourceGroupServerOptionalParams
  ): PagedAsyncIterableIterator<LongTermRetentionBackup>;
  /**
   * Copy an existing long term retention backup.
   * @param locationName The location of the database.
   * @param longTermRetentionServerName The name of the server
   * @param longTermRetentionDatabaseName The name of the database
   * @param backupName The backup name.
   * @param parameters The parameters needed for long term retention copy request
   * @param options The options parameters.
   */
  beginCopy(
    locationName: string,
    longTermRetentionServerName: string,
    longTermRetentionDatabaseName: string,
    backupName: string,
    parameters: CopyLongTermRetentionBackupParameters,
    options?: LongTermRetentionBackupsCopyOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LongTermRetentionBackupsCopyResponse>,
      LongTermRetentionBackupsCopyResponse
    >
  >;
  /**
   * Copy an existing long term retention backup.
   * @param locationName The location of the database.
   * @param longTermRetentionServerName The name of the server
   * @param longTermRetentionDatabaseName The name of the database
   * @param backupName The backup name.
   * @param parameters The parameters needed for long term retention copy request
   * @param options The options parameters.
   */
  beginCopyAndWait(
    locationName: string,
    longTermRetentionServerName: string,
    longTermRetentionDatabaseName: string,
    backupName: string,
    parameters: CopyLongTermRetentionBackupParameters,
    options?: LongTermRetentionBackupsCopyOptionalParams
  ): Promise<LongTermRetentionBackupsCopyResponse>;
  /**
   * Updates an existing long term retention backup.
   * @param locationName The location of the database.
   * @param longTermRetentionServerName The name of the server
   * @param longTermRetentionDatabaseName The name of the database
   * @param backupName The backup name.
   * @param parameters The requested backup resource state
   * @param options The options parameters.
   */
  beginUpdate(
    locationName: string,
    longTermRetentionServerName: string,
    longTermRetentionDatabaseName: string,
    backupName: string,
    parameters: UpdateLongTermRetentionBackupParameters,
    options?: LongTermRetentionBackupsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LongTermRetentionBackupsUpdateResponse>,
      LongTermRetentionBackupsUpdateResponse
    >
  >;
  /**
   * Updates an existing long term retention backup.
   * @param locationName The location of the database.
   * @param longTermRetentionServerName The name of the server
   * @param longTermRetentionDatabaseName The name of the database
   * @param backupName The backup name.
   * @param parameters The requested backup resource state
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    locationName: string,
    longTermRetentionServerName: string,
    longTermRetentionDatabaseName: string,
    backupName: string,
    parameters: UpdateLongTermRetentionBackupParameters,
    options?: LongTermRetentionBackupsUpdateOptionalParams
  ): Promise<LongTermRetentionBackupsUpdateResponse>;
  /**
   * Gets a long term retention backup.
   * @param locationName The location of the database.
   * @param longTermRetentionServerName The name of the server
   * @param longTermRetentionDatabaseName The name of the database
   * @param backupName The backup name.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    longTermRetentionServerName: string,
    longTermRetentionDatabaseName: string,
    backupName: string,
    options?: LongTermRetentionBackupsGetOptionalParams
  ): Promise<LongTermRetentionBackupsGetResponse>;
  /**
   * Deletes a long term retention backup.
   * @param locationName The location of the database
   * @param longTermRetentionServerName The name of the server
   * @param longTermRetentionDatabaseName The name of the database
   * @param backupName The backup name.
   * @param options The options parameters.
   */
  beginDelete(
    locationName: string,
    longTermRetentionServerName: string,
    longTermRetentionDatabaseName: string,
    backupName: string,
    options?: LongTermRetentionBackupsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a long term retention backup.
   * @param locationName The location of the database
   * @param longTermRetentionServerName The name of the server
   * @param longTermRetentionDatabaseName The name of the database
   * @param backupName The backup name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    locationName: string,
    longTermRetentionServerName: string,
    longTermRetentionDatabaseName: string,
    backupName: string,
    options?: LongTermRetentionBackupsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Copy an existing long term retention backup to a different server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database.
   * @param longTermRetentionServerName The name of the server
   * @param longTermRetentionDatabaseName The name of the database
   * @param backupName The backup name.
   * @param parameters The parameters needed for long term retention copy request
   * @param options The options parameters.
   */
  beginCopyByResourceGroup(
    resourceGroupName: string,
    locationName: string,
    longTermRetentionServerName: string,
    longTermRetentionDatabaseName: string,
    backupName: string,
    parameters: CopyLongTermRetentionBackupParameters,
    options?: LongTermRetentionBackupsCopyByResourceGroupOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LongTermRetentionBackupsCopyByResourceGroupResponse>,
      LongTermRetentionBackupsCopyByResourceGroupResponse
    >
  >;
  /**
   * Copy an existing long term retention backup to a different server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database.
   * @param longTermRetentionServerName The name of the server
   * @param longTermRetentionDatabaseName The name of the database
   * @param backupName The backup name.
   * @param parameters The parameters needed for long term retention copy request
   * @param options The options parameters.
   */
  beginCopyByResourceGroupAndWait(
    resourceGroupName: string,
    locationName: string,
    longTermRetentionServerName: string,
    longTermRetentionDatabaseName: string,
    backupName: string,
    parameters: CopyLongTermRetentionBackupParameters,
    options?: LongTermRetentionBackupsCopyByResourceGroupOptionalParams
  ): Promise<LongTermRetentionBackupsCopyByResourceGroupResponse>;
  /**
   * Updates an existing long term retention backup.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database.
   * @param longTermRetentionServerName The name of the server
   * @param longTermRetentionDatabaseName The name of the database
   * @param backupName The backup name.
   * @param parameters The requested backup resource state
   * @param options The options parameters.
   */
  beginUpdateByResourceGroup(
    resourceGroupName: string,
    locationName: string,
    longTermRetentionServerName: string,
    longTermRetentionDatabaseName: string,
    backupName: string,
    parameters: UpdateLongTermRetentionBackupParameters,
    options?: LongTermRetentionBackupsUpdateByResourceGroupOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LongTermRetentionBackupsUpdateByResourceGroupResponse>,
      LongTermRetentionBackupsUpdateByResourceGroupResponse
    >
  >;
  /**
   * Updates an existing long term retention backup.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database.
   * @param longTermRetentionServerName The name of the server
   * @param longTermRetentionDatabaseName The name of the database
   * @param backupName The backup name.
   * @param parameters The requested backup resource state
   * @param options The options parameters.
   */
  beginUpdateByResourceGroupAndWait(
    resourceGroupName: string,
    locationName: string,
    longTermRetentionServerName: string,
    longTermRetentionDatabaseName: string,
    backupName: string,
    parameters: UpdateLongTermRetentionBackupParameters,
    options?: LongTermRetentionBackupsUpdateByResourceGroupOptionalParams
  ): Promise<LongTermRetentionBackupsUpdateByResourceGroupResponse>;
  /**
   * Gets a long term retention backup.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database.
   * @param longTermRetentionServerName The name of the server
   * @param longTermRetentionDatabaseName The name of the database
   * @param backupName The backup name.
   * @param options The options parameters.
   */
  getByResourceGroup(
    resourceGroupName: string,
    locationName: string,
    longTermRetentionServerName: string,
    longTermRetentionDatabaseName: string,
    backupName: string,
    options?: LongTermRetentionBackupsGetByResourceGroupOptionalParams
  ): Promise<LongTermRetentionBackupsGetByResourceGroupResponse>;
  /**
   * Deletes a long term retention backup.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database
   * @param longTermRetentionServerName The name of the server
   * @param longTermRetentionDatabaseName The name of the database
   * @param backupName The backup name.
   * @param options The options parameters.
   */
  beginDeleteByResourceGroup(
    resourceGroupName: string,
    locationName: string,
    longTermRetentionServerName: string,
    longTermRetentionDatabaseName: string,
    backupName: string,
    options?: LongTermRetentionBackupsDeleteByResourceGroupOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a long term retention backup.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database
   * @param longTermRetentionServerName The name of the server
   * @param longTermRetentionDatabaseName The name of the database
   * @param backupName The backup name.
   * @param options The options parameters.
   */
  beginDeleteByResourceGroupAndWait(
    resourceGroupName: string,
    locationName: string,
    longTermRetentionServerName: string,
    longTermRetentionDatabaseName: string,
    backupName: string,
    options?: LongTermRetentionBackupsDeleteByResourceGroupOptionalParams
  ): Promise<void>;
}
