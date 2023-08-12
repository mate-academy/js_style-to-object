'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringArray = sourceString.trim().split(';');

  const sourceObj = {};

  for (const source of stringArray) {
    const [property, value] = source.split(':');

    if (property && value) {
      sourceObj[property.trim()] = value.trim();
    }
  }

  return sourceObj;
}

module.exports = convertToObject;
