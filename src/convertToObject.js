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
  function callback(sum, x) {
    return sum + x;
  }

  function sumInObj(sum, a) {
    return {
      ...sum,
      [a[0]]: a[1],
    };
  }

  // eslint-disable-next-line max-len
  const objectOfStyles = sourceString
    .split('')
    .filter(x => x !== '\n')
    .reduce(callback, '')
    .split(';').map(x => x.split(':'))
    .map(x => x.map(y => y.trim()))
    .filter(x => !x.includes(''))
    .reduce(sumInObj, {});

  return objectOfStyles;
}

module.exports = convertToObject;
