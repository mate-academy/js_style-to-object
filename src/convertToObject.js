'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const attributes = sourceString.split(';').filter((attr) => attr.length);

  for (const element in attributes) {
    const [key, value] = attributes[element].split(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
