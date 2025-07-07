'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // Just return an empty object for now
  const splitStrArr = sourceString.split(';');
  const resultObj = {};

  splitStrArr.map((str) => {
    const trimmedStr = str.trim();
    const splitTrimStr = trimmedStr.split(':');

    if (splitTrimStr.length < 2) {
      return false;
    }

    const keyItem = splitTrimStr[0].trim();
    const valueItem = splitTrimStr[1].trim();

    resultObj[keyItem] = valueItem;
  });

  return resultObj;
}

module.exports = convertToObject;
