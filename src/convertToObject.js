'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesObj = {};
  const lines = sourceString.split(';');

  lines.map(function (line) {
    const part = line.split(':');

    if (part.length === 2) {
      stylesObj[part[0].trim()] = part[1].trim();
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
