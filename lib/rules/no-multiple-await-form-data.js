/**
 * @fileoverview Prevent trying to await request.formData() in an action more than once.
 * @author @smerchek
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: `problem`,
    docs: {
      description:
        "Prevent trying to await request.formData() in an action more than once.",
      category: `Plugin/Remix`,
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here
    let formDataAwaitCount = 0;

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      AwaitExpression(node) {
        if (
          node.argument.callee &&
          node.argument.callee.property &&
          node.argument.callee.property.name === "formData"
        ) {
          formDataAwaitCount++;
          if (formDataAwaitCount > 1) {
            context.report({
              node,
              message: "Multiple awaits of request.formData() detected.",
            });
          }
        }
      },
      // visitor functions for different types of nodes
    };
  },
};
