'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((style) => style.trim())
    .map((style) => style.split(':'))
    .reduce((stylesObject, [key, value]) => {
      stylesObject[key.trim()] = value.trim();

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
