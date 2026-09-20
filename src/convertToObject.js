'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString || !sourceString.trim()) {
    return {};
  }

  return sourceString
    .split(';')
    .filter((style) => style.trim() !== '')
    .reduce((styleObject, style) => {
      const trimmedStyle = style.trim();
      const colonIndex = trimmedStyle.indexOf(':');

      if (colonIndex !== -1) {
        const key = trimmedStyle.slice(0, colonIndex).trim();
        const value = trimmedStyle.slice(colonIndex + 1).trim();

        if (key) {
          styleObject[key] = value;
        }
      }

      return styleObject;
    }, {});
}

module.exports = convertToObject;
