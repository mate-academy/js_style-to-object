'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArr = sourceString.split(';');
  const styleObj = {};

  styleArr.forEach(style => {
    const styleNew = style.split(':');

    if (styleNew[1] !== undefined) {
      styleObj[styleNew[0].trim()] = styleNew[1].trim();
    }
  });

  return styleObj;
  // write your code here
}

module.exports = convertToObject;
