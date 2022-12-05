'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newArray = sourceString.split(';')
    .map((element) => element.split(':'))
    .filter((word) => (word.length > 1))
    .reduce((key, value) => {
      // eslint-disable-next-line no-unused-expressions
      key[value[0].trim()] = value[1].trim();

      return key;
    }, {});

  return newArray;
}

module.exports = convertToObject;
