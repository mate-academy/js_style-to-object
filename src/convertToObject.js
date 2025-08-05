'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString
    .split(';')
    .map((style) => style.split(':').map((word) => word.trim()))
    .filter(([key, value]) => key && value);

  return Object.fromEntries(result);
}

module.exports = convertToObject;
