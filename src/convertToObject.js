'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const stylesObject = {};

  const lines = sourceString.split(';');

  lines.forEach(function (line) {
    const part = line.split(':');

    if (part.length >= 2) {
      stylesObject[part[0].trim()] = part[1].trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
