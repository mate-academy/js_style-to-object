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
      .filter((style) => style.trim())
      .map((style) => {
        const separatorIndex = style.indexOf(':');

        return [
          style.slice(0, separatorIndex).trim(),
          style.slice(separatorIndex + 1).trim(),
        ];
      }),
  );
}

module.exports = convertToObject;
