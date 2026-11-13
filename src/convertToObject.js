'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  if (typeof sourceString !== 'string' || !sourceString.trim()) {
    return {};
  }

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

    styleObject[property] = value;

    return styleObject;
  }, {});
}

module.exports = convertToObject;
