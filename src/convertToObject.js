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
  const sourceObj = {};
  const sourceArr = sourceString.split(';')
    .map(el => el.trim())
    .filter(el => el.length > 0);

  for (let i = 0; i < sourceArr.length; i++) {
    const index = sourceArr[i].indexOf(':');
    const key = sourceArr[i].slice(0, index).trim();
    const value = sourceArr[i].slice(index + 1).trim();

    sourceObj[key] = value;
  }

  return sourceObj;
}

module.exports = convertToObject;
