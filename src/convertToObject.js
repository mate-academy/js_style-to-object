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
  const singleLineString = sourceString.replace(/\n/g, "");

  const styleLine = singleLineString.split(";");

  const finalObj = styleLine.reduce((result, style) => {
    const [key, value] = style.split(":");

    if (key && value) {
      result[key.trim()] = value.trim();
    }

    return result;
  }, {});

  return finalObj;
}

module.exports = convertToObject;
