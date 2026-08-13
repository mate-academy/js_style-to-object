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
      .filter((line) => line.trim())
      .map((line) => {
        const [key, value] = line.split(':');

        return [key.trim(), value.trim()];
      }),
  );
}
module.exports = convertToObject;
