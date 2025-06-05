'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const rules = sourceString.split(';');

  for (const rule of rules) {
    const trimmedRule = rule.trim();

    if (!trimmedRule) {
      continue;
    }

    const colonIndex = trimmedRule.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const property = trimmedRule.slice(0, colonIndex).trim();
    const value = trimmedRule.slice(colonIndex + 1).trim();

    if (property && value) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
