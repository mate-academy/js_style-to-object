'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceObject = {};

  sourceString.split(';').forEach((line) => {
    const trimmedLine = line.trim();

    if (trimmedLine === '') {
      return;
    }

    const colonIndex = trimmedLine.indexOf(':'); // Corrected this line

    if (colonIndex === -1) {
      return;
    }

    const property = trimmedLine.slice(0, colonIndex).trim();
    const value = trimmedLine.slice(colonIndex + 1).trim();

    sourceObject[property] = value;
  });

  return sourceObject;
}

module.exports = convertToObject;
