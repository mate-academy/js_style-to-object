'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleanStr = sourceString.trim();

  const rules = cleanStr.split(';');

  return rules.reduce((acc, rule) => {
    const trimmedRule = rule.trim();

    if (!trimmedRule) {
      return acc;
    }

    const colonIndex = trimmedRule.indexOf(':');

    if (colonIndex === -1) {
      return acc;
    }

    const key = trimmedRule.slice(0, colonIndex).trim();
    const value = trimmedRule.slice(colonIndex + 1).trim();

    acc[key] = value;

    return acc;
  }, {});
}

module.exports = convertToObject;
