'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return Object.fromEntries(
    sourceString
      .split(';')
      .map((style) => style.trim())
      .filter(Boolean)
      .map((style) => {
        const colonIndex = style.indexOf(':');

        const property = style.slice(0, colonIndex).trim();

        const value = style.slice(colonIndex + 1).trim();

        return [property, value];
      }),
  );
}

module.exports = convertToObject;
