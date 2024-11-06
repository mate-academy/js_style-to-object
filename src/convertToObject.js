'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .trim()
    .split(';')
    .map((declaration) => declaration.split(':'))
    .filter(([property, value]) => property && value)
    .reduce((stylesObj, [property, value]) => {
      stylesObj[property.trim()] = value.trim();

      return stylesObj;
    }, {});
}

module.exports = convertToObject;
