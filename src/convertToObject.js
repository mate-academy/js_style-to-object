'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl.includes(':'))
    .reduce((acc, decl) => {
      const [property, value] = decl.split(':');

      acc[property.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
