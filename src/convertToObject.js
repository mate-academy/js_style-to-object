'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .map((pair) => pair.trim())
    .filter((pair) => pair.includes(':'))
    .reduce((acc, pair) => {
      const [property, value] = pair.split(':').map((s) => s.trim());

      acc[property] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
