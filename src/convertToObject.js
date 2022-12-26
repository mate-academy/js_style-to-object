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
  // write your code here
  const obj = {};

  sourceString
    .split(";")
    .map((str) => str.trim())
    .filter((str2) => str2.length > 0)
    .map((data) => {
      const key = data.split(":")[0].trim();
      const value = data.split(":")[1].trim();

      obj[key] = value;
    });

  return obj;
}

module.exports = convertToObject;
