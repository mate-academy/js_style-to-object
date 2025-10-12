'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.includes(':'))
    .map((line) => {
      const colonIndex = line.indexOf(':');
      const property = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();

      return [property, value];
    })
    .filter(([property, value]) => property !== '' && value !== '')
    .reduce((stylesObject, [property, value]) => {
      stylesObject[property] = value;

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
