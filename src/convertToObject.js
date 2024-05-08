'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitedString = sourceString.split(';');
  const cssObject = {};

  for (const line of splitedString) {
    const colonIndex = line.indexOf(':');

    if (colonIndex !== -1) {
      const property = line.slice(0, colonIndex).trim();
      const value = line
        .slice(colonIndex + 1)
        .replace(';', ' ')
        .trim();

      cssObject[property] = value;
    }
  }

  return cssObject;
}

module.exports = convertToObject;
