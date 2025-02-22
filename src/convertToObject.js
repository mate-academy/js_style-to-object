'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const styleObject = {};
  const strings = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter(Boolean);

  strings.forEach((string) => {
    const colonIndex = string.indexOf(':');

    if (colonIndex !== -1) {
      const key = string.slice(0, colonIndex).trim();
      const value = string.slice(colonIndex + 1).trim();

      if (key && value) {
        styleObject[key] = value;
      }
    }
  });

  return styleObject;
}

module.exports = convertToObject;
