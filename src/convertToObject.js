'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return Object.fromEntries(
    sourceString
      .split(';')
      .filter((word) => word.trim())
      .map((word) => {
        const [key, value] = word.split(':');

        return [key.trim(), value.trim()];
      }),
  );
}

module.exports = convertToObject;
