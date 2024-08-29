'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((prev, style) => {
    const firstKeyIndex = style.indexOf(':');

    if (firstKeyIndex !== -1) {
      const key = style.slice(0, firstKeyIndex).trim();
      const firstValueIndex = firstKeyIndex + 1;
      const value = style.slice(firstValueIndex).trim();

      prev[key] = value;
    }

    return prev;
  }, {});
}

module.exports = convertToObject;
