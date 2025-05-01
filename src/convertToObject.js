'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const lines = sourceString.split(';');

  const properties = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line) {
      const [key, value] = line.split(':');

      properties[key.trim()] = value.trim();
    }
  }

  return properties;
}

module.exports = convertToObject;
