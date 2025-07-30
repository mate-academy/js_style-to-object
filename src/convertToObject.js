'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // 1. Split by `;` to get individual declarations
  sourceString
    .split(';')

    .map((rule) => rule.trim())

    .filter(Boolean)

    .forEach((rule) => {
      const parts = rule.split(':');

      if (parts.length < 2) {
        return;
      }

      const property = parts.shift().trim();

      const value = parts.join(':').trim();

      if (property && value) {
        result[property] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
