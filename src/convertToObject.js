'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(el => el.trim().replace(/[,]/g, ''))
    .filter(el => el !== '')
    .map(el => {
      const arr = el.split(':');

      return [arr[0].trim(), arr[1].trim()];
    })
    .reduce((prev, item) => ({
      ...prev, [item[0]]: item[1],
    }), {});
}

module.exports = convertToObject;
