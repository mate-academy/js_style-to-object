'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = {};
  const inputSplittedString = sourceString.split(';');

  for (const item of inputSplittedString) {
    const splittedItem = item.split(':');

    if (splittedItem.length === 2) {
      const [key, value] = splittedItem;

      res[key.trim()] = value.trim();
    }
  }

  return res;
}

module.exports = convertToObject;
