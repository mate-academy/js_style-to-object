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
      .map((style) => style.trim())
      .filter((style) => style)
      .map((style) => {
        const [key, value] = style.split(':');

        return [key.trim(), value.trim()];
      }),
  );
}

module.exports = convertToObject;
