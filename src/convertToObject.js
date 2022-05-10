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
  // write your code here
  const obj = {};
  const arr = sourceString.split(';').map(a => a.trim());
  const newArr = arr.map(a => a.split(':'));

  const resArr = newArr.filter(a => a[0].length > 1);

  for (let i = 0; i < resArr.length; i++) {
    obj[resArr[i][0].trim()] = resArr[i][1].trim();
  }

  return obj;
}

module.exports = convertToObject;
