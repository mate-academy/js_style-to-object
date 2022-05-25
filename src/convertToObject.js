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
  const arrString = sourceString.split(';')
    .filter(el => el.trim().length > 0)
    .map(str => str.split(':'));

  const convertObject = {};

  for (const [key, value] of arrString) {
    convertObject[key.trim()] = value.trim();
  }

  return convertObject;
}

module.exports = convertToObject;
