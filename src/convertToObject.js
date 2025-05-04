'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const result = {};

  const tempArr = sourceString.split(';');

  for (const t of tempArr) {
    const parts = t.split(':');

    if (parts[0] && parts[1]) {
      result[parts[0].trim()] = parts[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
