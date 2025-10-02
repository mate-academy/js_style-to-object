'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  // Split on ; to get individual rules.
  // Then split on : to get property and values.
  const stylesObj = {};

  if (!sourceString || !sourceString.trim()) {
    return stylesObj;
  }

  // First split by semicolons to get individual rules
  const rules = sourceString.split(';');

  rules.forEach((rule) => {
    const trimmedRule = rule.trim();

    if (trimmedRule) {
      // Then split each rule by the first colon to get property and value
      const colonIndex = trimmedRule.indexOf(':');

      if (colonIndex > 0) {
        const property = trimmedRule.substring(0, colonIndex).trim();
        const value = trimmedRule.substring(colonIndex + 1).trim();

        if (property && value) {
          stylesObj[property] = value;
        }
      }
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
