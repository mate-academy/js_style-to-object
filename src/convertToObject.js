'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const srcStrArray = sourceString.split(';');
  const obj = {};

  for (const str of srcStrArray) {
    if (str.trim() !== '') {
      const s = str.split(':');

      obj[s[0].trim()] = s[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
