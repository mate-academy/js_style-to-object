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
  const readyObj = {};

  sourceString.split(';').forEach(keyPlusMeaning => {
    const arr = keyPlusMeaning.split(':');

    if (arr.length === 2) {
      readyObj[arr[0].trim()] = arr[1].trim();
    }
  });

  return readyObj;
}

module.exports = convertToObject;
