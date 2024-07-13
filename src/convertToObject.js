'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((item) => item.trim() !== '')
    .map((item) => item.trim())
    .reduce((stylesObject, item) => {
      const pair = item.split(':');

      const key = pair[0].trim();
      const value = pair[1].trim();

      stylesObject[key] = value;

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
