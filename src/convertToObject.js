'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertCssToObject = {};

  sourceString
    .split(';')
    .filter(property => property.trim().length > 0)
    .map(property => property.split(':'))
    .forEach(element => {
      convertCssToObject[element[0].trim()] = element[1].trim();
    });

  return convertCssToObject;
}

module.exports = convertToObject;
