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
  const allStylesArray = sourceString.split(';\n');
  const allStylesObject = {};

  for (const style of allStylesArray) {
    if (style.includes(':')) {
      const oneStyleArray = style.split(':');
      const key = oneStyleArray[0].trim();
      const value = oneStyleArray[1].trim();

      Object.assign(allStylesObject, { [key]: value });
    }
  }

  return allStylesObject;
}

module.exports = convertToObject;
