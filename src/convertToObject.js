'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((param) => param.trim())
    .filter((param) => param !== '')
    .reduce((stylesObj, current) => {
      const parts = current.split(':');
      const key = parts[0].trim();
      const value = parts[1].trim();

      stylesObj[key] = value;

      return stylesObj;
    }, {});
}

module.exports = convertToObject;
