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
    .map((item) => item.split(':').map(i => i.trim()))
    .filter(keyValArr => keyValArr.length === 2)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .reduce((object, item) => ({
      ...object,
      [item[0]]: item[1],
    }), {});
}

module.exports = convertToObject;
