'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const filterByLines = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line !== '');

  const stylesObj = {};

  for (let i = 0; i < filterByLines.length; i++) {
    const [key, value] = filterByLines[i].split(':');

    if (key && value) {
      stylesObj[key.trim()] = value.trim();
    }
  }

  return stylesObj;
}

module.exports = convertToObject;
