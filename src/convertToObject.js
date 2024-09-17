'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitString = sourceString.split(';');
  const result = {};
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].length > 1) {
      const entry = splitString[i].split(':');
      const key = entry[0].replace(/\r?\n|\r/g, '').trim();
      const value = entry[1].trim();
      result[key] = value;
    }
  }
  return result;
}

module.exports = convertToObject;
