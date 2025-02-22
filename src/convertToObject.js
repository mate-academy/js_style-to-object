'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((stylesObject, line) => {
    const trimmedLine = line.trim();

    if (trimmedLine) {
      const colonIndex = trimmedLine.indexOf(':');

      if (colonIndex !== -1) {
        const property = trimmedLine.slice(0, colonIndex).trim();
        const value = trimmedLine.slice(colonIndex + 1).trim();

        stylesObject[property] = value;
      }
    }

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
