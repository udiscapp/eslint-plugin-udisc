/**
 * @fileoverview Prevent trying to await request.formData() in an action more than once.
 * @author @smerchek
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-multiple-await-form-data"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-multiple-await-form-data", rule, {
  valid: [
    {
      parserOptions: { sourceType: "module", ecmaVersion: "latest" },
      code: `
var action = async ({ request, params }) => {
  var formData = await request.formData();
}
      `,
    },
    {
      parserOptions: { sourceType: "module", ecmaVersion: "latest" },
      code: `
var action = async ({ request, params }) => {
  await directFunctionCall();
}
      `,
    },
  ],

  invalid: [
    {
      parserOptions: { sourceType: "module", ecmaVersion: "latest" },
      code: `
var action = async ({ request, params }) => {
  console.log(await request.formData());
  var formData = await request.formData();
}
      `,
      errors: [
        {
          message: "Multiple awaits of request.formData() detected.",
          type: "AwaitExpression",
        },
      ],
    },
  ],
});
