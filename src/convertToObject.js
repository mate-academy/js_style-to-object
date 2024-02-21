'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js)) and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArr = sourceString.split(';');
  const stylesObj = {};

  for (let i = 0; i < stylesArr.length; i++) {
    const oneStyle = stylesArr[i].trim().split(':');

    if (oneStyle.length === 2) {
      const key = oneStyle[0].trim();
      const value = oneStyle[1].trim();

      stylesObj[key] = value;
    }
  }

  return stylesObj;
}

module.exports = convertToObject;
