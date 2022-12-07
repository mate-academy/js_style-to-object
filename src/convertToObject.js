'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an example
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const finalObject = {};
  const keyObject = 0;
  const valueObject = 1;

  sourceString.split(';')
    .map((x) => x.trim())
    .map((x) => x.split(':'))
    .filter((x) => x.length > 1)
    .forEach(x => {
      x[keyObject] = x[keyObject].trim();
      x[valueObject] = x[valueObject].trim();
      finalObject[x[keyObject]] = x[valueObject];
    });

  return finalObject;
}

module.exports = convertToObject;
