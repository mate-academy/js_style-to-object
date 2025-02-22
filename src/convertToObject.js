'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((pair) => pair.trim())
    .filter((pair) => pair && pair.includes(':'))
    .reduce((stylesObject, pair) => {
      const [property, value] = pair.split(':').map((str) => str.trim());

      stylesObject[property] = value;

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
