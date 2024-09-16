'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrStrings = sourceString.split(';');
  const result = {};

  arrStrings.forEach((part) => {
    if (part.trim()) {
      const str = part.split(':');

      if (str.length === 2) {
        const key = str[0].trim();
        const value = str[1].trim();

        result[key] = value;
      }
    }
  });

  return result;
}

module.exports = convertToObject;
