'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString.replace(/\n/g, '')
    .split(';')
    .map(el => el.trim())
    .filter(el => el.length)
    .map(row => {
      const [prop, value] = row.split(':');

      return [prop.trim(), value.trim()];
    })
    .reduce((prev, cur) => ({
      ...prev,
      [cur[0]]: cur[1],
    }
    ), {});
}

module.exports = convertToObject;
