'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString.trim()) {
    return result;
  }

  sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.includes(':'))
    .forEach((line) => {
      const [key, value] = line.split(':').map((part) => part.trim());

      if (key) {
        result[key] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
