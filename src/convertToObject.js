'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .trim()
    .split(';')
    .filter(Boolean)
    .reduce((styleObject, element) => {
      const partsString = element.trim().split(':');

      if (partsString.length === 2) {
        const key = partsString[0].trim();
        const value = partsString[1].trim();

        styleObject[key] = value;
      }

      return styleObject;
    }, {});
}

module.exports = convertToObject;
