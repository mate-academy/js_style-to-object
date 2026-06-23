'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newLines = sourceString.split(';');

  const filteredLines = newLines.filter((line) => line.trim().length > 0);

  return filteredLines.reduce((acc, line) => {
    const parts = line.trim().split(':');

    if (!parts[1]) {
      return acc;
    }

    return { ...acc, [parts[0].trim()]: parts[1].trim() };
  }, {});
}

module.exports = convertToObject;
