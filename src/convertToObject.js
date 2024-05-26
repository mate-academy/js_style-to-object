'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((line) => line.trim() !== '')
    .reduce((acc, item) => {
      const separatedItem = item.split(':');

      if (separatedItem.length >= 2) {
        const key = separatedItem[0].trim();
        const value = separatedItem.slice(1).join(':').trim();

        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
