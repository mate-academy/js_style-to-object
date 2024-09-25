'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const splitString = sourceString
    .split(';')
    .filter((string) => string.includes(':'));
  const result = {};

  const callback = (line) => {
    if (line) {
      const splitLine = line.split(':');

      result[splitLine[0].trim()] = splitLine[1].trim();
    }
  };

  splitString.forEach(callback);

  return result;
}

module.exports = convertToObject;
