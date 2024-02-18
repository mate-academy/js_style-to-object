'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const araayCss = sourceString.split(';')
    .map((item) => item.split(':')
      .map((value) => value.trim())
    )
    .filter((item) => item[0] !== '' && item[1] !== '');

  const sourceObject = {};

  araayCss.forEach((value) => {
    sourceObject[value[0]] = value[1];
  });

  return sourceObject;
}

module.exports = convertToObject;
