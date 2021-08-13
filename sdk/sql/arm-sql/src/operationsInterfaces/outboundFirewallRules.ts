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
  OutboundFirewallRule,
  OutboundFirewallRulesListByServerOptionalParams,
  OutboundFirewallRulesGetOptionalParams,
  OutboundFirewallRulesGetResponse,
  OutboundFirewallRulesCreateOrUpdateOptionalParams,
  OutboundFirewallRulesCreateOrUpdateResponse,
  OutboundFirewallRulesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a OutboundFirewallRules. */
export interface OutboundFirewallRules {
  /**
   * Gets all outbound firewall rules on a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: OutboundFirewallRulesListByServerOptionalParams
  ): PagedAsyncIterableIterator<OutboundFirewallRule>;
  /**
   * Gets an outbound firewall rule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param outboundRuleFqdn
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    outboundRuleFqdn: string,
    options?: OutboundFirewallRulesGetOptionalParams
  ): Promise<OutboundFirewallRulesGetResponse>;
  /**
   * Create a outbound firewall rule with a given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param outboundRuleFqdn
   * @param parameters An Azure SQL DB Server Outbound Firewall Rule.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    outboundRuleFqdn: string,
    parameters: OutboundFirewallRule,
    options?: OutboundFirewallRulesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<OutboundFirewallRulesCreateOrUpdateResponse>,
      OutboundFirewallRulesCreateOrUpdateResponse
    >
  >;
  /**
   * Create a outbound firewall rule with a given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param outboundRuleFqdn
   * @param parameters An Azure SQL DB Server Outbound Firewall Rule.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    outboundRuleFqdn: string,
    parameters: OutboundFirewallRule,
    options?: OutboundFirewallRulesCreateOrUpdateOptionalParams
  ): Promise<OutboundFirewallRulesCreateOrUpdateResponse>;
  /**
   * Deletes a outbound firewall rule with a given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param outboundRuleFqdn
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serverName: string,
    outboundRuleFqdn: string,
    options?: OutboundFirewallRulesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a outbound firewall rule with a given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param outboundRuleFqdn
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    outboundRuleFqdn: string,
    options?: OutboundFirewallRulesDeleteOptionalParams
  ): Promise<void>;
}
