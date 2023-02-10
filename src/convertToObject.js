'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const splitSourceString = sourceString
    .split(';')
    .map(a => a.split(':'));

  const sourceStringToObj = {};

  for (const style of splitSourceString) {
    if (style[0].toUpperCase() !== style[0].toLowerCase()) {
      sourceStringToObj[style[0].trim()] = style[1].trim();
    }
  }

  return sourceStringToObj;
}

module.exports = convertToObject;
