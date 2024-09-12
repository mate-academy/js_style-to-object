'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const arr = sourceString.split(';');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(':')) {
      const items = arr[i].split(':');
      const key = items[0].trim();
      const value = items[1].trim();

      obj[key] = value;
    }
  }

  return obj;
}

module.exports = convertToObject;
