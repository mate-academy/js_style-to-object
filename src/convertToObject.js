'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = sourceString.split(';');

  return array
    .filter((item) => {
      const trimmed = item.trim();

      return trimmed !== '';
    })
    .reduce((prev, item) => {
      const parts = item.split(':');

      if (parts.length !== 2) {
        return;
      }

      prev[parts[0].trim()] = parts[1].trim();

      return prev;
  }, {});
}

module.exports = convertToObject;
