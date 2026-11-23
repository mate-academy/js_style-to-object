'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = {};

  const stylesArray = sourceString.split(';');

  stylesArray.forEach((style) => {
    const trimmedStyle = style.trim();

    const colonIndex = trimmedStyle.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const key = trimmedStyle.slice(0, colonIndex).trim();
    const value = trimmedStyle.slice(colonIndex + 1).trim();

    res[key] = value;
  });

  return res;
}

module.exports = convertToObject;
