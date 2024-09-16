'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const trimmedString = sourceString.trim();
  const regex = /\s*:\s*/;
  const pairs = trimmedString.split(';');
  const keyValuePairs = pairs.map((pair) => pair.split(regex));
  const result = {};

  for (const pair of keyValuePairs) {
    if (pair.length === 2) {
      const key = pair[0].trim();
      const value = pair[1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
