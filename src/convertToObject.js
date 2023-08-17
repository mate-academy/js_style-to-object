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
  const arrayOfKeys = sourceString.replace(/;/g, '\n').split('\n');
  const removeEmptyKeys = [];
  const resultObject = {};
  const modifiedArray = [];

  for (let i = 0; i < arrayOfKeys.length; i++) {
    modifiedArray[i] = arrayOfKeys[i].replace(/^[^\w\d-]*/, '')
      .replace(/[; ]+/g, ' ')
      .replace(/:\s+/g, ':');

    if (modifiedArray[i].length > 0) {
      removeEmptyKeys.push(modifiedArray[i]);
    }
  }

  for (let i = 0; i < removeEmptyKeys.length; i++) {
    removeEmptyKeys[i] = removeEmptyKeys[i].split(':', 2);
  }

  for (const key of removeEmptyKeys) {
    resultObject[key[0].trim()] = key[1].trim();
  }

  return (resultObject);
}

module.exports = convertToObject;
