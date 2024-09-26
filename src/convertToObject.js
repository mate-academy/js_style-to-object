'use strict';

/**
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
