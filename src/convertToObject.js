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
  const stylesObject = {};

  sourceString.split(";").forEach((style) => {
    if (style.trim().length > 1) {
      stylesObject[style.slice(0, style.indexOf(":")).trim()] = style
        .slice(style.indexOf(":") + 1)
        .trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
