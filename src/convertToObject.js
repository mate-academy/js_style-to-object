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
  const sourceArr = sourceString.split(';');
  const resultObj = {};

  for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i].trim()) {
      const key = sourceArr[i].split(':')[0].trim();
      const value = sourceArr[i].split(':')[1].trim();

      resultObj[key] = value;
    }
  }

  return resultObj;
}

module.exports = convertToObject;
