'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const strings = sourceString.split(';');

  for (const string of strings) {
    const strArray = string.split(':');

    result[strArray[0].trim()] = strArray[1].trim();
  }

  return result;
}

module.exports = convertToObject;
