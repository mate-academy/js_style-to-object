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
  let resultObject = {};
  const properties = sourceString.split(';');
  for (let property of properties) {
    const [key, value] = property.split(':');
    if (value !== undefined) {
      resultObject[key.trim()] = value.trim();
    }
  }
  return resultObject;
}
module.exports = convertToObject;
