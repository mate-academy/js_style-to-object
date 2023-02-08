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
  const callback = (accu, current) => ({
    ...accu, [current[0]]: current[1],
  });

  return sourceString
    .split(';')
    .map(item => item
      .replace(/\n./g, '')
      .trim())
    .filter(item => item !== '')
    .map(item => item.split(':'))
    .map(item => [item[0].trim(), item[1].trim()])
    .reduce(callback, {});
}

module.exports = convertToObject;
