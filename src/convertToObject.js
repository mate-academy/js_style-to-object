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
  return sourceString.split(';')
    .map(str => str.trim()
      .split(':')
      .map(unit => unit.trim()))
    .filter(str => str.length === 2)
    .reduce((str, cur) => {
      str[cur[0]] = cur[1];

      return str;
    }, {});
}

module.exports = convertToObject;
