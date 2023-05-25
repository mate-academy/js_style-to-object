'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const sourceArray = sourceString.split(';');

  let result = {};
  let arr;
  let newElem;

  sourceArray.map((elem) => {
    newElem = elem.trim();

    arr = newElem.split(':');

    if (arr.length > 1) {
      result = {
        ...result,
        [arr[0].trim()]: arr[1].trim(),
      };
    }
  });

  return result;
}

module.exports = convertToObject;
