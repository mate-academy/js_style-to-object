'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleanStyles = {};
  const cleanStylesArray = [];
  const stylesArrayWithSpaces = sourceString.replace(/;/g, ':').split(':');

  stylesArrayWithSpaces.map(item => cleanStylesArray.push(item.trim()));

  cleanStylesArray.forEach((item, i, array) => {
    if (i % 2 === 0 && array[i]) {
      cleanStyles[array[i]] = array[i + 1];
    }
  });

  return cleanStyles;
}
module.exports = convertToObject;
