'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, str) => {
    const keyValue = str.split(':');

    if (keyValue.length === 2) {
      const [key, value] = keyValue;

      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
