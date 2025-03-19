'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.includes(':'))
    .reduce((acc, declaration) => {
      const [property, value] = declaration.split(':');

      acc[property.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
