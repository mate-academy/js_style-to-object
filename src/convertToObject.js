'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0)
    .forEach((rule) => {
      const colonIndex = rule.indexOf(':');

      if (colonIndex === -1) {
        return;
      }

      const key = rule.substring(0, colonIndex).trim();
      const value = rule.substring(colonIndex + 1).trim();

      result[key] = value;
    });

  return result;
}

module.exports = convertToObject;
