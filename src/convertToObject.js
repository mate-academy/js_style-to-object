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
  const comand = sourceString.split(';');
  const result = {};

  for (const i of comand) {
    let rrr = i.split(':');

    if (rrr[1] !== undefined) {
      result[rrr[0].trimRight().trimLeft()] = rrr[1].trimRight().trimLeft();
      rrr = [];
    }
  }

  return result;
  // write your code here
}

module.exports = convertToObject;
