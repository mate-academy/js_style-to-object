'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
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
  const result = {};
  const arrayWithoutSpaces = sourceString
    .split(';').map(x => x.trim()).filter(x => x.length > 0);

  arrayWithoutSpaces.forEach(x =>
    (result[x.split(':')[0].trim()] = x.split(':')[1].trim()));

  return result;
}

module.exports = convertToObject;
