'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString.split(';');
  const result = {};

  sourceArray.forEach((elem) => {
    const newElem = elem.trim();
    const arr = newElem.split(':');

    if (arr.length > 1) {
      result[arr[0].trim()] = arr[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
