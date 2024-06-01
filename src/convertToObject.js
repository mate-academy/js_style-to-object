'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const keysValues = sourceString.split(';');

  const cssObject = {};

  keysValues.forEach((keyValue) => {
    const trimmedKeyValue = keyValue.trim();

    if (trimmedKeyValue) {
      const parts = trimmedKeyValue.split(':');

      if (parts.length === 2) {
        const [property, value] = parts.map((part) => part.trim());

        cssObject[property] = value;
      }
    }
  });

  return cssObject;
}

module.exports = convertToObject;
