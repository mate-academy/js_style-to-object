'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration)
    .map((declaration) => declaration.split(':'))
    .map(([property, value]) => [property.trim(), value.trim()])
    .reduce((stylesObject, [property, value]) => {
      stylesObject[property] = value;

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
