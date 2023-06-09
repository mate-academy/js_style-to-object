'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const sourceStringSplit = sourceString.split(';');

  for (const key of sourceStringSplit) {
    if (key.includes(':')) {
      const [property, value] = key.split(':');

      result[property.trim()] = value.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
