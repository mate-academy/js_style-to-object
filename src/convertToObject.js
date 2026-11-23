'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const lines = sourceString.split(';');
  const cssObject = {};

  lines.forEach((line) => {
    const separatorIndex = line.indexOf(':');
    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();

    if (key && value) {
      cssObject[key] = value;
    }
  });

  return cssObject;
}

module.exports = convertToObject;
