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
  let propertiesLine = sourceString.split(';');
  let result = [];
  for (let property in propertiesLine) {
    const [key, value] = property.split(':');
    if (value !== undefined) {
      result[key.trim()] = value.trim();
    }
  }
  return result;
}

module.exports = convertToObject;
