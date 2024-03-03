'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const strings = sourceString
    .split(';')
    .map((string) => string.trim())
    .filter((string) => string !== '');

  const result = {};

  for (const string of strings) {
    const style = string.split(':').map((part) => part.trim());

    result[style[0]] = style[1];
  }

  return result;
}

module.exports = convertToObject;
