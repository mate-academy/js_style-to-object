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
  // write your code here
  const arrayString = sourceString.split(';');
  const newObject = {};

  for (let i = 0; i < arrayString.length; i++) {
    if (arrayString[i].trim()) {
      const style = arrayString[i].split(':');

      newObject[style[0].trim()] = style[1].trim();
    };
  }

  return newObject;
}

module.exports = convertToObject;
