'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  return sourceString
    .split(';')
    .map(rule => rule.trim())
    .filter(rule => rule.length > 0)
    .reduce((stylesObject, rule) => {
      const colonIndex = rule.indexOf(':');

      if (colonIndex === -1) {
        return stylesObject;
      }

      const key = rule.slice(0, colonIndex).trim();
      const value = rule.slice(colonIndex + 1).trim();

      if (key && value) {
        stylesObject[key] = value;
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
