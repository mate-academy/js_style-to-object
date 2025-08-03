'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  // Split by semicolon, trim each part, and filter out empty ones
  sourceString.split(';').forEach((declaration) => {
    const [key, ...rest] = declaration.split(':');

    if (!key || rest.length === 0) {
      return;
    } // Skip invalid lines

    const property = key.trim();
    const value = rest.join(':').trim(); // Handles values with ':' in them

    if (property && value) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
