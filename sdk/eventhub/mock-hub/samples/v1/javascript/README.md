---
page_type: sample
languages:
  - javascript
products:
  - azure
  - azure-event-hubs
urlFragment: mock-hub-javascript
---

# Internal Mock Hub client library samples for JavaScript

These sample programs show how to use the JavaScript client libraries for Internal Mock Hub in some common scenarios.

| **File Name**     | **Description**                     |
| ----------------- | ----------------------------------- |
| [start.js][start] | Demonstrates how to start mock hub. |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

You need [an Azure subscription][freesub] and the following Azure resources to run these sample programs:

- [Azure Event Hub][createinstance_azureeventhub]

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

3. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node start.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env CERT_PASSPHRASE="<cert passphrase>" node start.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[start]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/mock-hub/samples/v1/javascript/start.js
[apiref]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/mock-hub
[freesub]: https://azure.microsoft.com/free/
[createinstance_azureeventhub]: https://learn.microsoft.com/azure/event-hubs/event-hubs-create
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/eventhub/mock-hub/README.md
