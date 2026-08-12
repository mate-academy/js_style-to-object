'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item !== '')
    .reduce((prev, item) => {
      const parts = item.split(':');

      parts[0] = parts[0].trim();
      parts[1] = parts[1].trim();

      prev[parts[0]] = parts[1];

      return prev;
    }, {});
}

module.exports = convertToObject;
