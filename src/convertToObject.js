'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const splitString = sourceString.split(';');

  for (let i = 0; i < splitString.length; i++) {
    const trimmedDeclaration = splitString[i].trim();

    if (!trimmedDeclaration) {
      continue;
    }

    const newArray = trimmedDeclaration.split(':');

    const key = newArray[0];
    const value = newArray[1];

    const newKey = key.trim();
    const newValue = value.trim();

    result[newKey] = newValue;
  }

  return result;
}

module.exports = convertToObject;
