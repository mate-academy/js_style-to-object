'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitsourceString = sourceString.trim().split(';');
  const object = {};

  splitsourceString.forEach((item) => {
    if (item.trim().length > 0) {
      const resultItemSplit = item.split(':');
      const key = resultItemSplit[0].trim();
      const value = resultItemSplit[1].trim();

      object[key] = value;
    }
  });

  return object;
}

module.exports = convertToObject;
