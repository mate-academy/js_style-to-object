'use strict';

/**
 * Converts CSS string to JS object (last property wins for duplicates)
 * @param {string} sourceString - CSS string to parse
 * @return {Object} - JS object with CSS properties
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach(rule => {
    const trimmedRule = rule.trim();

    if (!trimmedRule) return; // Skip empty rules

    const colonIndex = trimmedRule.indexOf(':');

    if (colonIndex === -1) return; // Skip invalid rules

    const property = trimmedRule.slice(0, colonIndex).trim();
    const value = trimmedRule.slice(colonIndex + 1).trim();

    if (property && value) {
      // Last occurrence wins (CSS cascade behavior)
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
