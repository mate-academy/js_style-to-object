'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const styleStringToArr = sourceString.trim().split(';');

  for (const key of styleStringToArr) {
    const styleToArr = key.trim().split(':');

    if (styleToArr[1] && styleToArr[0] !== undefined) {
      result[styleToArr[0].trim()] = styleToArr[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
