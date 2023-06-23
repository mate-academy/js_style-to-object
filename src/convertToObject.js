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
  const cssObject = {};

  const pairs = sourceString
    .split(';')
    .map((x) => x.trim())
    .filter((x) => x.length > 0)
    .map((x) => x.split(':'))
    .map((x) => x.map((y) => y.trim()));

  const toCss = (x) => (cssObject[x[0]] = x[1]);

  pairs.forEach(toCss);

  return cssObject;
}

module.exports = convertToObject;
