'use strict';

/**
 * @param {string} stylesString
 * @return {Object}
 */
function convertToObject(stylesString) {
  if (typeof stylesString !== 'string') {
    return {};
  }

  // Split by declaration terminator, then reduce into an object
  return stylesString
    .split(';')
    .map((part) => part.trim())
    .filter((part) => part.length > 0)
    .reduce((stylesObject, declaration) => {
      const colonIndex = declaration.indexOf(':');

      // Ignore invalid declarations without ':'
      if (colonIndex === -1) {
        return stylesObject;
      }

      const property = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      // Skip empty keys/values (example output doesn't include them)
      if (!property || !value) {
        return stylesObject;
      }

      stylesObject[property] = value;

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
