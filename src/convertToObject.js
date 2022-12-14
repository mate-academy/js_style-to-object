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
  const propertiesArr = sourceString.split(';')
    .map(properties => properties.trim())
    .filter(removeEmptyString => removeEmptyString.length > 1)
    .map(element => element.split(':'));

  const result = {};

  for (const value of propertiesArr) {
    result[value[0].trim()] = value[1].trim();
  }

  return result;
}

module.exports = convertToObject;
