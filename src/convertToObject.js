'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  return sourceString
    .split(';')
    .map((e) => e.trim())
    .filter((e) => e.length > 0)
    .reduce((acc, e) => {
      const [key, value] = e.split(':');

      acc[key.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
