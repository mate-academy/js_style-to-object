'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArrayClean = sourceString.split(';')
    .map(string => string.split(':'))
    .filter(array => (array.length === 2))
    .map(array => {
      return array.map(element => element.trim());
    });

  const styleObject = {};

  styleArrayClean.forEach(arrayStyleString => {
    styleObject[arrayStyleString[0]] = arrayStyleString[1];
  });

  return styleObject;
}

module.exports = convertToObject;
