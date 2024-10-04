'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((prev, item) => {
    const trimmedItem = item.trim();

    if (trimmedItem) {
      const [key, value] = trimmedItem.split(':').map((part) => part.trim());

      if (key && value) {
        prev[key] = value;
      }
    }

    return prev;
  }, {});
}

module.exports = convertToObject;
