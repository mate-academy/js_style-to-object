'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objResult = {};

  const array = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter(Boolean)
    .map((el) => {
      const index = el.indexOf(':');

      if (index === -1) {
        return false;
      }

      const key = el.slice(0, index).trim();
      const val = el.slice(index + 1).trim();

      return [key, val];
    });

  for (let i = 0; i < array.length; i++) {
    objResult[array[i][0]] = array[i][1];
  }

  return objResult;
}

module.exports = convertToObject;
