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
  const resultObj = {};

  const stylesArr = sourceString.split(';');

  for (const stylestring of stylesArr) {
    if (stylestring.trim() !== '') {
      const styleArr = stylestring.split(':');
      const style = styleArr[0].trim();
      const styleValue = styleArr[1].trim();

      resultObj[style] = styleValue;
    }
  }

  return resultObj;
}

module.exports = convertToObject;
