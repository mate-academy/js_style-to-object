'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = sourceString
    .trim()
    .split(';')
    .filter((str) => str.trim())
    .map((str) => {
      return str
        .trim()
        .split(':')
        .map((s) => s.trim());
    });

  return Object.fromEntries(cssProperties);
}
module.exports = convertToObject;
