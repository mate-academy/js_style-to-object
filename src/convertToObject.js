'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string') {
    throw new Error('Input must be a string');
  }

  return sourceString
    .trim()
    .split(';')
    .reduce((styleObject, cleanString) => {
      const partsOfString = cleanString.split(':');
      const key = partsOfString[0]?.trim();
      const value = partsOfString[1]?.trim();

      if (key && value) {
        styleObject[key] = value;
      }

      return styleObject;
    }, {});
}

module.exports = convertToObject;
