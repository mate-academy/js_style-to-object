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
  const arrString = sourceString.split(';');
  const resultObject = {};

  for (const element of arrString) {
    const filteredArr = element.split(':').map(item => item.trim());
    const key = filteredArr[0];
    const value = filteredArr[1];

    if (key && value) {
      resultObject[key] = value;
    }
  }

  return resultObject;
}

module.exports = convertToObject;
