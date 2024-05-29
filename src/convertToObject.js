'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString.split(';');
  const readyArr = {};

  for (const property of sourceArray) {
    const propertyArray = property.trim().split(':');
    const [keyName, keyValue] = propertyArray;

    if (keyValue !== undefined) {
      readyArr[keyName.trim()] = keyValue.trim();
    }
  }

  return readyArr;
}
module.exports = convertToObject;
