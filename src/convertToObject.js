'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((str) => str.length > 0)
    .reduce((acc, str) => {
      const [key, value] = str.split(':');

      acc[key.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
