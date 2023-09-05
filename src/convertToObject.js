'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');
  const result = {};

  lines.map((line) => line.trim())
    .filter((line) => line.length > 0)
    .forEach((line) => {
      const partOfLine = line.split(':');
      const property = partOfLine[0].trim();
      const value = partOfLine[1].trim();

      result[property] = value;
    });

  return result;
};

module.exports = convertToObject;
