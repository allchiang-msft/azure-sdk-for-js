/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const accountName: msRest.OperationURLParameter = {
  parameterPath: "accountName",
  mapper: {
    required: true,
    serializedName: "accountName",
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const assetName: msRest.OperationURLParameter = {
  parameterPath: "assetName",
  mapper: {
    required: true,
    serializedName: "assetName",
    type: {
      name: "String"
    }
  }
};
export const autoStart: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "autoStart"
  ],
  mapper: {
    serializedName: "autoStart",
    type: {
      name: "Boolean"
    }
  }
};
export const contentKeyPolicyName: msRest.OperationURLParameter = {
  parameterPath: "contentKeyPolicyName",
  mapper: {
    required: true,
    serializedName: "contentKeyPolicyName",
    type: {
      name: "String"
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const filterName: msRest.OperationURLParameter = {
  parameterPath: "filterName",
  mapper: {
    required: true,
    serializedName: "filterName",
    type: {
      name: "String"
    }
  }
};
export const jobName: msRest.OperationURLParameter = {
  parameterPath: "jobName",
  mapper: {
    required: true,
    serializedName: "jobName",
    type: {
      name: "String"
    }
  }
};
export const liveEventName: msRest.OperationURLParameter = {
  parameterPath: "liveEventName",
  mapper: {
    required: true,
    serializedName: "liveEventName",
    constraints: {
      MaxLength: 32,
      MinLength: 1,
      Pattern: /^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/
    },
    type: {
      name: "String"
    }
  }
};
export const liveOutputName: msRest.OperationURLParameter = {
  parameterPath: "liveOutputName",
  mapper: {
    required: true,
    serializedName: "liveOutputName",
    constraints: {
      MaxLength: 256,
      MinLength: 1,
      Pattern: /^([a-zA-Z0-9])+(-*[a-zA-Z0-9])*$/
    },
    type: {
      name: "String"
    }
  }
};
export const locationName: msRest.OperationURLParameter = {
  parameterPath: "locationName",
  mapper: {
    required: true,
    serializedName: "locationName",
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const orderby: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "orderby"
  ],
  mapper: {
    serializedName: "$orderby",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    type: {
      name: "String"
    }
  }
};
export const skip: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skip"
  ],
  mapper: {
    serializedName: "$skip",
    type: {
      name: "Number"
    }
  }
};
export const streamingEndpointName: msRest.OperationURLParameter = {
  parameterPath: "streamingEndpointName",
  mapper: {
    required: true,
    serializedName: "streamingEndpointName",
    constraints: {
      MaxLength: 24,
      MinLength: 1,
      Pattern: /^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/
    },
    type: {
      name: "String"
    }
  }
};
export const streamingLocatorName: msRest.OperationURLParameter = {
  parameterPath: "streamingLocatorName",
  mapper: {
    required: true,
    serializedName: "streamingLocatorName",
    type: {
      name: "String"
    }
  }
};
export const streamingPolicyName: msRest.OperationURLParameter = {
  parameterPath: "streamingPolicyName",
  mapper: {
    required: true,
    serializedName: "streamingPolicyName",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};
export const transformName: msRest.OperationURLParameter = {
  parameterPath: "transformName",
  mapper: {
    required: true,
    serializedName: "transformName",
    type: {
      name: "String"
    }
  }
};
