'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = sourceString
    .trim()
    .split(';')
    .map((string) => {
      return string
        .trim()
        .split(':')
        .map((str) => str.trim());
    });

  return Object.fromEntries(styleObject);
}

module.exports = convertToObject;
