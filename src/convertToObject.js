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
  array.forEach((element) => {
    if (!element.includes(':')) {
      return;
    }

    const [rawKey, rawValue] = element.split(':');
    const key = rawKey.trim();
    const valOfKey = rawValue.trim();

    if (key.length === 0 || valOfKey.length === 0) {
      return;
    }

    object[key] = valOfKey;
  });
}

module.exports = convertToObject;
