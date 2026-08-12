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
      const [rawKey, rawValue] = item.split(':');

      const key = rawKey.trim();
      const value = rawValue.trim();

      prev[key] = value;

      return prev;
    }, {});
}

module.exports = convertToObject;
