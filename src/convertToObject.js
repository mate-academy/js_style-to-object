'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styleString) {
  const result = {};

  styleString
    .split(';')
    .map(rule => rule.trim())
    .filter(rule => rule)
    .forEach(rule => {
      const colonIndex = rule.indexOf(':');
      if (colonIndex === -1) return;

      const property = rule.slice(0, colonIndex).trim();
      const value = rule.slice(colonIndex + 1).trim();
      result[property] = value;
    });

  return result;
}

module.exports = convertToObject;
