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
  const result = sourceString
    .split(';')
    .filter(item => item.includes(':'))
    .map(keyVal => {
      return keyVal
        .split(':')
        .map(value => value.trim());
    })
    .reduce((acc, element) => ({
      ...acc,
      [element[0]]: element[1],
    }), {});

  return result;
}

module.exports = convertToObject;
