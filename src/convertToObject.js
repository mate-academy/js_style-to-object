'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [
 * test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString.split(';')
    .map((item) => item.split(':'))
    .filter((item) => item.length === 2)
    .map(item => item.map((inner) => inner.trim()));

  const resultObject = {};

  result.forEach(([key, value]) => {
    resultObject[key] = value;
  });

  return resultObject;
}

module.exports = convertToObject;
