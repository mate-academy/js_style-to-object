'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((styleObject, line) => {
    const cleanLine = line.trim();

    if (!cleanLine) {
      return styleObject;
    }

    const colonIndex = cleanLine.indexOf(':');

    if (colonIndex === -1) {
      return styleObject;
    }

    const property = cleanLine.slice(0, colonIndex).trim();
    const value = cleanLine.slice(colonIndex + 1).trim();

    if (!property || !value) {
      return styleObject;
    }

    return {
      ...styleObject,
      [property]: value,
    };
  }, {});
}

module.exports = convertToObject;
