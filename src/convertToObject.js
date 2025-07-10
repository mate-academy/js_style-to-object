'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const splitedString = sourceString.split(';');

  splitedString.forEach((style) => {
    const trimmedStyle = style.trim();

    if (!trimmedStyle) {
      return;
    }

    const colonIndex = trimmedStyle.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const key = trimmedStyle.slice(0, colonIndex).trim();
    const value = trimmedStyle.slice(colonIndex + 1).trim();

    if (!key || !value) {
      return;
    }

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
