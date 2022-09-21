'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are
 *  keys
 * and values
 * are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styleObject = {};
  const styleArray = sourceString.split(';').map(style => style.split(':'));

  for (let i = 0; i < styleArray.length; i++) {
    if (styleArray[i].length !== 0 && styleArray[i][1] !== undefined) {
      const first = styleArray[i][0].trim();
      const second = styleArray[i][1].trim();

      styleObject[first] = second;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
