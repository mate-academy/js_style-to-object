'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const sourceObj = {};
  const sourceStringSplitArr = sourceString.split(';');

  for (const prop of sourceStringSplitArr) {
    const trimmedProp = prop.trim();

    const trimmedPropArr = trimmedProp.split(':');

    if (trimmedPropArr[0].length >= 2 && trimmedPropArr[1]) {
      sourceObj[trimmedPropArr[0].trim()] = trimmedPropArr[1].trim();
    }
  }

  return sourceObj;
}

module.exports = convertToObject;
