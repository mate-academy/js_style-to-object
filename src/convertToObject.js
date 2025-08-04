'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((s) => {
    const [key, value] = s.trim().split(':');

    if (!key || !value) {
      return;
    } // Skip invalid lines

    const propertyKey = key.trim();
    const propertyValue = value.trim();

    result[propertyKey] = propertyValue;
  });

  return result;
}

module.exports = convertToObject;
