'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = sourceString
    .split(';')
    .filter(([key, value]) => key && value)
    .map((str) => {
      return str
        .trim()
        .split(':')
        .map((s) => s.trim());
    });

  return Object.fromEntries(cssProperties);
}

module.exports = convertToObject;
