'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const styleStringToArr = sourceString.trim().split(';');

  for (const key of styleStringToArr) {
    const styleToArr = key.trim().split(':');

    if (styleToArr[1] && styleToArr[0] !== undefined) {
      stylesObject[styleToArr[0].trim()] = styleToArr[1].trim();
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
