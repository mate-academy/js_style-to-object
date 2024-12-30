'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleanedStyles = sourceString
    .split(';')
    .map((style) => style.trim())
    .filter(Boolean);
  const result = {};

  cleanedStyles.forEach((style) => {
    const colonIndex = style.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = style.slice(0, colonIndex).trim();
    const value = style.slice(colonIndex + 1).trimStart();

    if (property && value) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
