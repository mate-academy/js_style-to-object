'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};
  const arrSplit = sourceString.split(';');

  for (const char of arrSplit) {
    const charSplit = char.split(':');
    const charTrim = charSplit[0].trim();

    if (charTrim) {
      object[charTrim] = charSplit[1].trim();
    }
  }

  return object;
}

module.exports = convertToObject;
