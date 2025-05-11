'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const sourceArray = sourceString.split(`;`);
  const array1 = [];
  const array2 = [];

  for (const array of sourceArray) {
    const deleteSpace = array.trim();

    if (deleteSpace.length >= 2) {
      array1.push(deleteSpace);
    }
  }

  for (const elements of array1) {
    const object = elements.split(`:`);

    array2.push(object);
  }

  const result = array2.reduce((acc, [key, value]) => {
    acc[key.trim()] = value.trim();

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
