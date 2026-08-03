'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .filter((rule) => rule.trim().length > 0)
    .reduce((stylesObject, rule) => {
      const parts = rule.split(':');
      const key = parts[0].trim();
      const value = parts[1].trim();

      stylesObject[key] = value;

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
