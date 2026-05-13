'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const lines = sourceString.split(';');

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    if (trimmedLine) {
      const separatorIndex = trimmedLine.indexOf(':');

      const key = trimmedLine.slice(0, separatorIndex).trim();

      const value = trimmedLine.slice(separatorIndex + 1).trim();

      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
