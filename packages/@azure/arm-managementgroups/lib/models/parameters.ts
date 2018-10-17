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
export const cacheControl: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "cacheControl"
  ],
  mapper: {
    serializedName: "Cache-Control",
    defaultValue: 'no-cache',
    type: {
      name: "String"
    }
  }
};
export const expand: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "$expand",
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
export const groupId: msRest.OperationURLParameter = {
  parameterPath: "groupId",
  mapper: {
    required: true,
    serializedName: "groupId",
    type: {
      name: "String"
    }
  }
};
export const groupName: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "groupName"
  ],
  mapper: {
    serializedName: "groupName",
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
export const recurse: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "recurse"
  ],
  mapper: {
    serializedName: "$recurse",
    type: {
      name: "Boolean"
    }
  }
};
export const search: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "search"
  ],
  mapper: {
    serializedName: "$search",
    type: {
      name: "String"
    }
  }
};
export const select: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "select"
  ],
  mapper: {
    serializedName: "$select",
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
export const skiptoken: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skiptoken"
  ],
  mapper: {
    serializedName: "$skiptoken",
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
export const view: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "view"
  ],
  mapper: {
    serializedName: "$view",
    type: {
      name: "String"
    }
  }
};
