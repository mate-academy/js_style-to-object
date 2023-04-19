'use strict';

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
  const result = {};
  const splitedString = sourceString.replace(/\n/g, '').split(';');

  for (let i = 0; i < splitedString.length; i++) {
    const keyValuePair = splitedString[i].split(':');

    if (keyValuePair.length === 2) {
      const key = keyValuePair[0].trim();
      const value = keyValuePair[1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
