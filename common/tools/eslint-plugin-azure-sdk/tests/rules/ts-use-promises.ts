// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @file Testing the ts-use-promises rule.
 *
 */

import { createRuleTester } from "../ruleTester.js";
import rule from "../../src/rules/ts-use-promises.js";

//------------------------------------------------------------------------------
// Example files
//------------------------------------------------------------------------------

const example = `
const promise = (): Promise<string> => {
    return new Promise(resolve => resolve("example"));
}
`;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = createRuleTester();

ruleTester.run("ts-use-promises", rule, {
  valid: [
    {
      code: example,
    },
  ],
  invalid: [
    // this could should be uncommented after this issue has been fixed:
    // https://github.com/Azure/azure-sdk-for-js/issues/13186
    // {
    //   code: `import Promise from 'bluebird';${example}`,
    //   errors: [
    //     {
    //       message: "promises should use the in-built Promise type, not libraries or polyfills"
    //     }
    //   ]
    // }
  ],
});
