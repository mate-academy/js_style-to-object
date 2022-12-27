'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};
  const stringToArray = sourceString.split(';').join(':').split(':');

  for (let i = 0; i < stringToArray.length; i += 2) {
    const key = stringToArray[i].trim();
    const value = stringToArray[i + 1];

    if (key !== '' && value !== undefined) {
      cssObject[key] = value.trim();
    }
  }

  return cssObject;
}

module.exports = convertToObject;
