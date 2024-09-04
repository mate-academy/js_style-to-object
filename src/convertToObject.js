'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const covertedString = sourceString.split(';');
  covertedString.pop();

  for (const key of covertedString) {
    const keyVal = key.split(':');
    result[keyVal[0].trim()] = keyVal[1].trim();
  }

  return result;
}

module.exports = convertToObject;
