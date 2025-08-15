'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitArray = sourceString.trim().split(';');
  const object = {};

  for (const item of splitArray) {
    if (item.trim().length > 0) {
      const resultItemSplit = item.split(':');
      const key = resultItemSplit[0].trim();
      const value = resultItemSplit[1].trim();

      object[key] = value;
    }
  }

  return object;
}

module.exports = convertToObject;
