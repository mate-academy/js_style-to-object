'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const rules = sourceString.split(';');

  for (const rule of rules) {
    const colonIndex = rule.indexOf(':');

    if (colonIndex !== -1) {
      const key = rule.slice(0, colonIndex).trim();

      const value = rule.slice(colonIndex + 1).trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
