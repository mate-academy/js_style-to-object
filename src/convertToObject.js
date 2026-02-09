'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .trim()
    .split(';')
    .filter((rule) => rule.trim() !== '')
    .forEach((rule) => {
      const colonIndex = rule.indexOf(':');

      if (colonIndex === -1) {
        return;
      }

      const key = rule.slice(0, colonIndex).trim();
      const value = rule.slice(colonIndex + 1).trim();

      if (key === '') {
        return;
      }

      result[key] = value;
    });

  return result;
}

module.exports = convertToObject;
