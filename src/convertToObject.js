'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((cssRule) => cssRule.trim())
    .filter((cssRule) => cssRule.length)
    .reduce((stylesMap, cssRule) => {
      const parts = cssRule.split(':');
      const name = parts[0].trim();
      const value = parts.slice(1).join(':').trim();

      stylesMap[name] = value;

      return stylesMap;
    }, {});
}

module.exports = convertToObject;
