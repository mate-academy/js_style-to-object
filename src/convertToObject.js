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
  const sourceObject = {};

  const sourceArray = sourceString
    .split(';')
    .map(item => item.split(':').map(el => el.trim()))
    .filter(el => el.length > 1);

  for (const subArray of sourceArray) {
    sourceObject[subArray[0]] = subArray[1];
  }

  return sourceObject;
}

module.exports = convertToObject;
