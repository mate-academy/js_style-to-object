'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((rule) => {
    const colonIndex = rule.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = rule.slice(0, colonIndex).trim();
    const value = rule.slice(colonIndex + 1).trim();

    if (property) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
