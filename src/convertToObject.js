'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  if (!sourceString.trim()) {
    return {};
  }

  const linesFilter = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line !== '');

  const stylesObj = {};

  for (let i = 0; i < linesFilter.length; i++) {
    const [key, value] = linesFilter[i].split(':');

    if (key && value) {
      stylesObj[key.trim()] = value.trim();
    }
  }

  return stylesObj;
}

module.exports = convertToObject;
