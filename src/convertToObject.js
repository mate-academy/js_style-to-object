'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleEntries = sourceString
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((pair) => pair.split(':').map((s) => s.trim()));

  return Object.fromEntries(styleEntries);
}

module.exports = convertToObject;
