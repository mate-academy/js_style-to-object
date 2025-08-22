'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())

    .filter((line) => line.length > 0)

    .reduce((acc, style) => {
      const [key, value] = style.split(':');

      if (key && value) {
        acc[key.trim()] = value.trim();
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
