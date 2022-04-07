'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};

  const rowsArray = sourceString
    .split('\n')
    .map(string => string.replace(';', ''))
    .filter(string => string.trim() !== '');

  const keysArray = rowsArray.map(row => row.split(':')[0].trim());
  const valuesArray = rowsArray.map(row => row.split(':')[1].trim());

  for (let i = 0; i < keysArray.length; i++) {
    resultObject[keysArray[i]] = valuesArray[i];
  }

  return resultObject;
}

module.exports = convertToObject;
