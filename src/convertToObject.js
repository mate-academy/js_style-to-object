'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 *  in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfKeys = sourceString.split('\n');
  const removeEmptyKeys = [];
  const resultObject = {};

  for (let i = 0; i < arrayOfKeys.length; i++) {
    arrayOfKeys[i] = arrayOfKeys[i].replace(/^[^\w\d-]*/, '')
      .replace(/[; ]+/g, ' ')
      .replace(/:\s+/g, ':');

    if (arrayOfKeys[i].length > 2) {
      removeEmptyKeys.push(arrayOfKeys[i]);
    }
  }

  for (let i = 0; i < removeEmptyKeys.length; i++) {
    removeEmptyKeys[i] = removeEmptyKeys[i].split(':');
  }

  for (const key of removeEmptyKeys) {
    key[0] = key[0].trim();
    key[1] = key[1].trim();
    resultObject[key[0]] = key[1];
  }

  return (resultObject);
}

module.exports = convertToObject;
