'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const words = sourceString.split(';');

  words.forEach((word) => {
    const trimmed = word.trim();

    if (trimmed) {
      const [key, value] = trimmed.split(':');

      if (typeof key === 'undefined' || typeof value === 'undefined') {
        return;
      }
      styleObject[key.trim()] = value.trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
