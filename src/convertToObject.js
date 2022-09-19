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
  const objectStyle = {};

  const text = sourceString.split('  ').join('').split(';');
  const arr = text.filter(item => item.length > 3).map(item => item.split(':'));

  for (let i = 0; i < arr.length; i++) {
    objectStyle[arr[i][0].trim()] = arr[i][1].trim();
  }

  return objectStyle;
}

module.exports = convertToObject;
