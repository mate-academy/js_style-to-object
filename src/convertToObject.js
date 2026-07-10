'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString.split(';').reduce((stylesMap, element) => {
    const parts = element.split(':');

    if (parts.length === 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();

      return {
        ...stylesMap,
        [key]: value,
      };
    }

    return stylesMap;
  }, {});
}

module.exports = convertToObject;
