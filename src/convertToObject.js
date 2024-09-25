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

  const styleObject = {};

  const callback = (line) => {
    const splitLine = line.split(':');

    styleObject[splitLine[0].trim()] = splitLine[1].trim();
  };

  splitString.map(callback);

  return styleObject;
}

module.exports = convertToObject;
