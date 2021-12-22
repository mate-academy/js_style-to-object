'use strict';

/**
 * Implement convertToObject function:
 *
  * Function takes string with styles
  * and returns object where CSS properties are keys
  * and values are the values of related CSS properties
  *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(property => property.trim().length > 0)
    .map(pair => pair.split(':'))
    .reduce((stylesObject, pair) => {
      stylesObject[pair[0].trim()] = pair[1].trim();

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
