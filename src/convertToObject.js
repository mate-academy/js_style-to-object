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
    .trim()
    .split(';')
    .map(element => element.trim())
    .filter(element => element.length > 0)
    .map(element => element.split(':'))
    .reduce((acc, [key, value]) => {
      acc[key.trim()] = value.trim();

      return acc;
    },
    {}
    );

  return result;
}

module.exports = convertToObject;
