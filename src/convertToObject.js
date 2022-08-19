/* eslint-disable quotes */
"use strict";

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
  // write the function here
  const result = {};
  const arr = sourceString.split(";");

  for (let i = 0; i < arr.length; i++) {
    const arr2 = arr[i].split(":");

    if (arr2.length === 2) {
      result[arr2[0].trim()] = arr2[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
