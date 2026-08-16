'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const stylesArray = sourceString.split(';');

  for (const style of stylesArray) {
    const trimmedStyle = style.trim();

    if (!trimmedStyle) {
      continue;
    }

    const colonIndex = trimmedStyle.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const key = trimmedStyle.slice(0, colonIndex).trim();
    const value = trimmedStyle.slice(colonIndex + 1).trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
