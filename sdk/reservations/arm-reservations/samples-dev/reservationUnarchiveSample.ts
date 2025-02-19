/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AzureReservationAPI } from "@azure/arm-reservations";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Restores a `Reservation` to the state it was before archiving.

 *
 * @summary Restores a `Reservation` to the state it was before archiving.

 * x-ms-original-file: specification/reservations/resource-manager/Microsoft.Capacity/stable/2022-11-01/examples/Unarchive.json
 */
async function unarchive(): Promise<void> {
  const reservationOrderId = "276e7ae4-84d0-4da6-ab4b-d6b94f3557da";
  const reservationId = "356e7ae4-84d0-4da6-ab4b-d6b94f3557da";
  const credential = new DefaultAzureCredential();
  const client = new AzureReservationAPI(credential);
  const result = await client.reservation.unarchive(reservationOrderId, reservationId);
  console.log(result);
}

async function main(): Promise<void> {
  await unarchive();
}

main().catch(console.error);
