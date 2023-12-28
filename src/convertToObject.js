'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
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
    .map(value => value.trim())
    .filter(value => value.length > 0)
    .reduce((accum, str) => {
      const [ key, value ] = str.split(':').map(item => item.trim());

      accum[key] = value;

      return accum;
    }, {});
}

module.exports = convertToObject;
