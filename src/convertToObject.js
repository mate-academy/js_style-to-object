'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // Split by semicolon to get individual rules
  const rules = sourceString.split(';');

  rules.forEach((rule) => {
    // Trim whitespace from the rule
    const trimmedRule = rule.trim();

    // Skip empty rules
    if (!trimmedRule) {
      return;
    }

    // Find the colon that separates property and value
    const colonIndex = trimmedRule.indexOf(':');

    // Skip if no colon found
    if (colonIndex === -1) {
      return;
    }

    // Extract property and value
    const property = trimmedRule.substring(0, colonIndex).trim();
    const value = trimmedRule.substring(colonIndex + 1).trim();

    // Skip if property or value is empty
    if (!property || !value) {
      return;
    }

    // Add to result object
    result[property] = value;
  });

  return result;
}

module.exports = convertToObject;
