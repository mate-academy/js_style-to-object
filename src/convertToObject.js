'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const complexStylesString = require('./stylesString');

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

convertToObject(complexStylesString);

module.exports = convertToObject;
