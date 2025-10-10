'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const result = {};

  if (typeof sourceString !== 'string' || sourceString.trim() === '') {
    return result;
  }

  const rules = sourceString.split(';');

  rules.forEach((rule) => {
    const trimmedRule = rule.trim();

    if (trimmedRule === '') {
      return;
    }

    const colonIndex = trimmedRule.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = trimmedRule.slice(0, colonIndex).trim();
    const value = trimmedRule.slice(colonIndex + 1).trim();

    if (property && value) {
      result[property] = value;
    }
  });

  return result;
}
module.exports = convertToObject;
