'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const pairs = sourceString.split(';');

  for (const pair of pairs) {
    const trimmedPair = pair.trim();

    if (!trimmedPair) {
      continue;
    }

    const colonIndex = trimmedPair.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const key = trimmedPair.slice(0, colonIndex).trim();
    const value = trimmedPair.slice(colonIndex + 1).trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
