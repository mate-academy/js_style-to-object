'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const result = {};

  const firstSplit = sourceString.split(';');

  for (let i = 0; i < firstSplit.length; i++) {
    const secondSplit = firstSplit[i].trim();

    const colonIndex = secondSplit.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const key = secondSplit.substring(0, colonIndex).trim();
    const value = secondSplit.substring(colonIndex + 1).trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
