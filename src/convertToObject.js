'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with
 * styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 *  CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const splitString = sourceString.split(';');
  const stylesObject = {};

  splitString.forEach(style => {
    const styleString = style.split(':');

    if (styleString.length === 2) {
      stylesObject[styleString[0].trim()] = styleString[1].trim();
    };
  });

  return stylesObject;
}
module.exports = convertToObject;
