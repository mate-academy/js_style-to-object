'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitStr = sourceString.split(';');
  const styleObject = {};

  splitStr.forEach((item) => {
    const trimmedItem = item.trim();

    if (trimmedItem !== '') {
      const parts = trimmedItem.split(':');

      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts[1].trim();

        styleObject[key] = value;
      }
    }
  });

  return styleObject;
}

module.exports = convertToObject;
