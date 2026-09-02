'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};

  const splittedString = sourceString.split(';');

  if (sourceString.length <= 0) {
    return resultObject;
  }

  for (const part of splittedString) {
    const colonIndex = part.indexOf(':');
    const key = part.slice(0, colonIndex).trim();

    if (!key) {
      continue;
    }

    const value = part.slice(colonIndex + 1).trim();

    resultObject[key] = value;
  }

  return resultObject;
}

module.exports = convertToObject;
