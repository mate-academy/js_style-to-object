'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringSplited = sourceString.split(';');
  const result = {};

  for (const str of stringSplited) {
    const stringSplitedTwo = str.split(':');

    if (stringSplitedTwo.length >= 2) {
      result[stringSplitedTwo[0].trim()] = stringSplitedTwo[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
