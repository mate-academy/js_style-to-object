'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => {
      const idx = line.indexOf(':');

      if (idx === -1) {
        return null;
      }

      const key = line.slice(0, idx).trim();
      const value = line.slice(idx + 1).trim();

      return [key, value];
    })
    .filter((pair) => pair && pair[0].length > 0 && pair[1].length > 0)
    .reduce((styles, [key, value]) => {
      styles[key] = value;

      return styles;
    }, {});
}

module.exports = convertToObject;
