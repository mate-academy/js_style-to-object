'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0)
    .reduce((acc, rule) => {
      const colonIndex = rule.indexOf(':');

      if (colonIndex === -1) {
        return acc;
      }

      const key = rule.slice(0, colonIndex).trim();
      const value = rule.slice(colonIndex + 1).trim();

      acc[key] = value;

      return acc;
    }, result);
}

module.exports = convertToObject;
