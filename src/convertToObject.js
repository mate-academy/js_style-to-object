'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const pairs = sourceString.split(';');

  pairs.forEach(pair => {
    const parts = pair.split(':');

    if (parts.length === 2) {
      const property = parts[0].trim();
      const value = parts[1].trim();

      stylesObject[property] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
