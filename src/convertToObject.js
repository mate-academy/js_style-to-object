'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let properties = sourceString.split(';');
  let result = {};
  for (let property of properties) {
    const [key, value] = property.split(':');
    if (value !== undefined) {
      result[key.trim()] = value.trim();
    }
  }
  return result;
}

module.exports = convertToObject;
