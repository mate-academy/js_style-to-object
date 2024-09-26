'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let expectedObject = {};
  let propAndValues = sourceString.split(';');
  for (let keys of propAndValues) {
    let [property, value] = keys.split(':');
    if (value !== undefined) {
      expectedObject[property.trim()] = value.trim();
    }
  }
  return expectedObject;
}

module.exports = convertToObject;
