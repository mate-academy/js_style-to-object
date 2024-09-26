'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylePairs = sourceString
    .split(';')
    .map((pair) => pair.trim())
    .filter((pair) => pair !== '')
    .map((pair) => pair.split(':').map((item) => item.trim()));

  const object = {};

  for (const [key, value] of stylePairs) {
    object[key] = value;
  }

  return object;
}

module.exports = convertToObject;
