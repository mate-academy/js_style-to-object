'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString.trim()) {
    return result;
  }

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

    const property = trimmedRule.substring(0, colonIndex).trim();
    const value = trimmedRule.substring(colonIndex + 1).trim();

    if (property) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
