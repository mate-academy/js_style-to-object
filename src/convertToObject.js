'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let processedString = '';

  for (const symbol of sourceString) {
    if (symbol !== ';') {
      processedString += symbol;
    }
  }

  processedString = processedString
    .split('\n')
    .map((paramsString) => paramsString.trim())
    .filter((paramsString) => paramsString.length > 1)
    .map((paramsString) => paramsString.split(':'));

  const styledObject = {};

  for (const paramsString of processedString) {
    styledObject[paramsString[0].trim()] = paramsString[1].trim();
  }

  return styledObject;
}

module.exports = convertToObject;
