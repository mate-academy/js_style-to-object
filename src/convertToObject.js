'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split('\n').join('').split(';');

  const result = {};

  for (const property of properties) {
    const keyValue = property.split(':');

    if (keyValue.length === 2) {
      result[keyValue[0].trim()] = keyValue[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
