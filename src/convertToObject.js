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
  // write your code here
  const resultingObject = {};
  const keyValuesArray = sourceString.split(';');
  for (let property of keyValuesArray) {
    const [key, value] = property.split(':');
    if (value !== undefined) {
      resultingObject[key.trim()] = value.trim();
    };
  };
  return resultingObject;
}

module.exports = convertToObject;
