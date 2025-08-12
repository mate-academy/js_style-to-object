'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const result = {};

  stylesString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.includes(':'))
    .forEach((line) => {
      const [property, value] = line.split(':');

      result[property.trim()] = value.trim();
    });

  return result;
}

module.exports = convertToObject;
