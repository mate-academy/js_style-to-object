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
  const sourceObject = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el.length > 0)
    .map((el) => el.split(':'))
    .reduce((acc, curr) => {
      acc[curr[0].trim()] = curr[1].trim();

      return acc;
    }, {});

  return sourceObject;
}

module.exports = convertToObject;
