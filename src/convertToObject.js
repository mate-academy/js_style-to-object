'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';') // Split the string into individual declarations
    .reduce((acc, line) => {
      const trimmedLine = line.trim(); // Trim whitespace

      if (!trimmedLine) {
        return acc;
      } // Skip empty lines

      const [key, value] = trimmedLine.split(':');

      if (key && value) {
        acc[key.trim()] = value.trim();
      }

      return acc;
    }, {}); // Initialize the accumulator as an empty object
}

module.exports = convertToObject;
