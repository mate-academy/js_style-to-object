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
      .map((item) => item.trim())
      .filter((item) => item.length > 0)
      .map((item) => {
        const [key, value] = item.split(':');

        return [key.trim(), value.trim()];
      }),
  );
}

module.exports = convertToObject;
