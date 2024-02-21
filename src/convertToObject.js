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
  const newObject = {};

  const arrySource = sourceString
    .split(';')
    .map((style) => style.trim());

  for (let i = 0; i < arrySource.length; i++) {
    if (arrySource[i]) {
      const [key, value] = arrySource[i].split(':');

      newObject[key.trim()] = value.trim();
    }
  }

  return newObject;
}
module.exports = convertToObject;
