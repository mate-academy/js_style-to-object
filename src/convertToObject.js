'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const stylesObject = {};

  const lines = sourceString.split(';').filter((line) => line.length > 1);

  lines.forEach(function (line) {
    const part = line.trim().split(':');

    stylesObject[part[0].trim()] = part[1].trim();
  });

  return stylesObject;
}

module.exports = convertToObject;
