'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const result = {};
  const arr = sourceString.replace(/\r?\n|\r/g, '').split(';');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split(':');

    if (arr[i].length === 2) {
      arr[i][0] = arr[i][0].trim();
      arr[i][1] = arr[i][1].trim();
      result[arr[i][0]] = arr[i][1];
    }
  }

  return result;
}

module.exports = convertToObject;
