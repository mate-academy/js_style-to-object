'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parts = sourceString.split(';');

  return parts.reduce((acc, item) => {
    const trimmedItem = item.trim();

    if (trimmedItem) {
      const [key, value] = trimmedItem.split(':');

      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
