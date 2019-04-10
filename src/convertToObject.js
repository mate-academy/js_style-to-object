'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

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
