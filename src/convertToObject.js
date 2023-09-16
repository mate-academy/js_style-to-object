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
  const splitedString = sourceString.split(':').join(';').split(';');
  const trimmedString = [];

  for (let i = 0; i < splitedString.length; i++) {
    splitedString[i] = splitedString[i].trim();
  }

  for (const item of splitedString) {
    if (item !== '') {
      trimmedString.push(item);
    }
  }

  for (let i = 0; i < trimmedString.length; i += 2) {
    result[trimmedString[i]] = trimmedString[i + 1];
  }

  return result;
}

module.exports = convertToObject;
