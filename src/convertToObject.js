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
  const objCss = {};

  sourceString
    .split(';')
    .filter((word) => word.length > 4)
    .forEach((word) => {
      const styleString = word.split(':');

      objCss[styleString[0].trim()] = styleString[1].trim();
    });

  return objCss;
}

module.exports = convertToObject;
