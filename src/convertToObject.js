'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const keysValues = sourceString.split(';');

  const cssObject = {};

  keysValues.forEach((keyValue) => {
    const trimmedKeyValue = keyValue.trim();

    if (trimmedKeyValue) {
      const parts = trimmedKeyValue.split(':');

      const property = parts[0].trim();

      const value = parts[1].trim();

      cssObject[property] = value;
    }
  });

  return cssObject;
}

module.exports = convertToObject;
