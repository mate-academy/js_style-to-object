'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const lines = sourceString.split(';');

  const styleObject = lines.reduce((acc, line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      return acc;
    }

    const index = trimmedLine.lastIndexOf(':');

    if (index === -1) {
      return acc;
    }

    const key = trimmedLine.slice(0, index).trim();
    const value = trimmedLine.slice(index + 1).trim();

    acc[key] = value;

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
