/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type {
  ReservationsSummariesListByReservationOrderOptionalParams} from "@azure/arm-consumption";
import {
  ConsumptionManagementClient
} from "@azure/arm-consumption";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists the reservations summaries for daily or monthly grain.
 *
 * @summary Lists the reservations summaries for daily or monthly grain.
 * x-ms-original-file: specification/consumption/resource-manager/Microsoft.Consumption/stable/2021-10-01/examples/ReservationSummariesDaily.json
 */
async function reservationSummariesDaily(): Promise<void> {
  const subscriptionId =
    process.env["CONSUMPTION_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const reservationOrderId = "00000000-0000-0000-0000-000000000000";
  const grain = "daily";
  const filter =
    "properties/usageDate ge 2017-10-01 AND properties/usageDate le 2017-11-20";
  const options: ReservationsSummariesListByReservationOrderOptionalParams = {
    filter
  };
  const credential = new DefaultAzureCredential();
  const client = new ConsumptionManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.reservationsSummaries.listByReservationOrder(
    reservationOrderId,
    grain,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the reservations summaries for daily or monthly grain.
 *
 * @summary Lists the reservations summaries for daily or monthly grain.
 * x-ms-original-file: specification/consumption/resource-manager/Microsoft.Consumption/stable/2021-10-01/examples/ReservationSummariesMonthly.json
 */
async function reservationSummariesMonthly(): Promise<void> {
  const subscriptionId =
    process.env["CONSUMPTION_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const reservationOrderId = "00000000-0000-0000-0000-000000000000";
  const grain = "monthly";
  const credential = new DefaultAzureCredential();
  const client = new ConsumptionManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.reservationsSummaries.listByReservationOrder(
    reservationOrderId,
    grain
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  reservationSummariesDaily();
  reservationSummariesMonthly();
}

main().catch(console.error);
