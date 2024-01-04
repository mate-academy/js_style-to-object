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
  // write your code here
  const sourceArr = sourceString.split(';');
  const sourceObject = {};

  sourceArr.forEach(element => {
    const parts = element.split(':');
    const key = parts[0].trim();
    const value = parts[1] ? parts[1].trim() : '';

    if (key && value) {
      sourceObject[key] = value;
    }
  });

  return sourceObject;
}

module.exports = convertToObject;
