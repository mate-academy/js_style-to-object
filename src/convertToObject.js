'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

// const result = convertToObject(complexStylesString);

function convertToObject(convertableString) {
  const objectToReturn = {};
  const normalizedArray = convertableString
    .split(';')
    .map((part) => part.trim())
    .filter((element) => element.length > 0);

  fixAndMerge(normalizedArray, objectToReturn);

  return objectToReturn;
}

function fixAndMerge(array, object) {
  for (const element of array) {
    const key = element.split(':')[0].trim();
    const valOfKey = element.split(':')[1].trim();

    object[key] = valOfKey;
  }
}

module.exports = convertToObject;
