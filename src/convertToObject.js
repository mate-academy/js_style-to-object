'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .filter(styleString => styleString.trim())
    .forEach(styleString => {
      const styleArray = styleString.split(':');
      const styleProp = styleArray[0].trim();
      const styleValue = styleArray[1].trim();

      result[styleProp] = styleValue;
    });

  return result;
}

module.exports = convertToObject;
