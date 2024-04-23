'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const converted = {};
  const array = sourceString.split(';');

  for (const item of array) {
    const [key, value] = item.split(':');

    if (key && value) {
      converted[key.trim()] = value.trim();
    }
  }

  return converted;
}

module.exports = convertToObject;
