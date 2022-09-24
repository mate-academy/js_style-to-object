'use strict';

/**
 * Implement convertToObject function:
 *

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const singlePropertyList = sourceString.split(';');

  const objectFromString = {};

  for (const property of singlePropertyList) {
    const key = property.split(':')[0];
    const value = property.split(':')[1];

    if (key && value) {
      objectFromString[key.trim()] = value.trim();
    }
  }

  return objectFromString;
}

module.exports = convertToObject;
