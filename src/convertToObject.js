'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

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
    let key = element.split(':')[0].trim();
    const valOfKey = element.split(':')[1].trim();

    if (key.includes('-')) {
      key = `${key}`;
    }
    object[key] = valOfKey;
  }
}

module.exports = convertToObject;
