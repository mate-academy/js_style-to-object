'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arr = sourceString.split(';')
    .filter(elem => elem !== '')
    .map(each => each.trim())
    .filter(elem => elem.length > 0)
    .map(each => each.split(':')
      .map(elem => elem.trim()));
  const obj = {};

  for (const each of arr) {
    if (!obj[each[0]]) {
      obj[each[0]] = each[1];
    }
  }

  return obj;
}

module.exports = convertToObject;
