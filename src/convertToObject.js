'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};

  sourceString.split(';')
    .filter(property => property.trim())
    .map(element => element.split(':'))
    .map(element => {
      resultObject[element[0].trim()] = element[1].trim();
    });

  return resultObject;
}

module.exports = convertToObject;
