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
  // write your code here
  const arr = sourceString.split(";");

  return arr
    .map((style) => style.trim().split(":"))
    .filter(([property, value]) => property && value)
    .reduce((styles, [property, value]) => {
      styles[property.trim()] = value.trim();

      return styles;
    }, {});
}

module.exports = convertToObject;
