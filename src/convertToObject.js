'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(stringPart => stringPart.split(':'))
    .filter(string => string.length > 1)
    .map(str => str.map(word => word.trim()))
    .reduce(
      (prev, property) => {
        const key = property[0];
        const value = property[1];

        return {
          ...prev, [key]: value,
        };
      }, {});
}

module.exports = convertToObject;
