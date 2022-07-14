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
const callback = (prev, elem) => ({
  ...prev, [elem[0].trim()]: elem[1].trim(),
});

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(el => el.trim().split(':'))
    .filter(arr => arr.length > 1)
    .reduce(callback, {});
}

module.exports = convertToObject;
