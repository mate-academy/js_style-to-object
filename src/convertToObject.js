'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString.split(';');
  const realResult = {};

  for (const item of result) {
    const triM = item.trim();

    if (!triM) {
      continue;
    }

    const index = triM.indexOf(':');
    const key = triM.slice(0, index).trim();
    const value = triM.slice(index + 1).trim();

    realResult[key] = value;
  }

  return realResult;
  // write your code here
}

module.exports = convertToObject;
