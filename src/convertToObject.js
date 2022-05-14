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
  const sourceArr = sourceString.split(';').map(item => item.split(':'));
  const sourceObj = {};

  for (const item of sourceArr) {
    if (item.length === 2) {
      sourceObj[item[0].trim()] = item[1].trim();
    }
  }

  return sourceObj;
}

module.exports = convertToObject;
