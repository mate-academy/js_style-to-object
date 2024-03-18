'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitLines = sourceString.split(';');

  const result = splitLines.reduce((acc, line) => {
    const [key, value] = line.split(':').map((part) => part.trim());

    if (key && value) {
      acc[key] = value;
    }

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
