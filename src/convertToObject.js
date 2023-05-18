'use strict';

/**
 * Implement convertToObject function:
 *
 // eslint-disable-next-line max-len
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split('\n')
    .filter((el) => el.length > 3)
    .map((el) => el.split(': ').map((item) => item.trim().replace(';', '')))
    .reduce((result, [key, value]) => {
      result[key] = value.trim();

      return result;
    }, {});
}

module.exports = convertToObject;
