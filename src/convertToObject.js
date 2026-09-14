'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const pairs = sourceString.split(';');

  pairs.forEach((part) => {
    const [key, value] = part.split(':');

    if (key && value) {
      const trimmedKey = key.trim();
      const trimmedValue = value.trim();

      if (trimmedKey && trimmedValue) {
        result[trimmedKey] = trimmedValue;
      }
    }
  });

  return result;
}

module.exports = convertToObject;
