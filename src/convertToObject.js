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
  const resObj = {};
  const changeStr = sourceString
    .split(';')
    .filter((item) => item.trim())
    .map((item) => item.split(':'));

  for (let i = 0; i < changeStr.length; i++) {
    resObj[changeStr[i][0].trim()] = changeStr[i][1].trim();
  }

  return resObj;
}

module.exports = convertToObject;
