'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceString1 = sourceString.split(';');
  const cssObject = {};

  for (let string1 of sourceString1) {
    string1 = string1.split(':');

    if (string1[0].trim() !== '' && string1[1].trim() !== '') {
      cssObject[string1[0].trim()] = string1[1].trim();
    }
  }

  return cssObject;
}

module.exports = convertToObject;
