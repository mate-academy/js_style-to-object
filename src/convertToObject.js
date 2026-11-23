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
    const [key, value] = line.split(':');

    if (key && value) {
      cssObject[key.trim()] = value.trim();
    }
  });

  return cssObject;
}

module.exports = convertToObject;
