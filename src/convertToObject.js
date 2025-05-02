'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((prop) => prop.trim())
    .filter((prop) => prop.includes(':'))
    .reduce((start, declaration) => {
      const [property, value] = declaration.split(':');

      start[property.trim()] = value.trim();

      return start;
    }, {});
}

module.exports = convertToObject;
