'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0)
    .reduce((stylesMap, rule) => {
      const colonIndex = rule.indexOf(':');

      if (colonIndex === -1) {
        return stylesMap;
      }

      const property = rule.slice(0, colonIndex).trim();
      const value = rule.slice(colonIndex + 1).trim();

      stylesMap[property] = value;

      return stylesMap;
    }, {});
}

module.exports = convertToObject;
