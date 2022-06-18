'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where
 * CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  let arr = sourceString.split(/[:;\n]/);

  arr = arr.filter(item => item && item !== '  ');

  for (let i = 0; i < arr.length; i = i + 2) {
    obj[arr[i].trim()] = arr[i + 1].trim();
  }

  return obj;
}

module.exports = convertToObject;
