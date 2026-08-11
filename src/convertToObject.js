'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.trim().split(';');

  const styles = lines
    .map((line) => line.trim())
    .filter((line) => line !== '')
    .reduce((style, line) => {
      const separatorIndex = line.indexOf(':');

      const key = line.slice(0, separatorIndex).trim();
      const value = line.slice(separatorIndex + 1).trim();

      style[key] = value;

      return style;
    }, {});

  return styles;
}

module.exports = convertToObject;
