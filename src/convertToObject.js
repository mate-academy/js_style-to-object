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
  // write your code here
  const arr = sourceString.split(';');
  const array = arr.map(elem => elem.split(':'));
  const res = [];

  for (const el of array) {
    if (el.length > 1) {
      res.push([el[0].trim(), el[1].trim()]);
    }
  }

  const result = Object.fromEntries(res);

  return result;
}

module.exports = convertToObject;
