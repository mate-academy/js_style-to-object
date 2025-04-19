'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const trimmedSource = sourceString.trim();

  if (!trimmedSource) {
    return result;
  }

  const rules = trimmedSource.split(';');

  for (const rule of rules) {
    const trimmedRule = rule.trim();

    if (!trimmedRule) {
      continue;
    }

    const colonIndex = trimmedRule.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const key = trimmedRule.substring(0, colonIndex).trim();
    const value = trimmedRule.substring(colonIndex + 1).trim();

    if (key) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
