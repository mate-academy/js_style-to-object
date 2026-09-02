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

  const callback = (part) => {
    const colonIndex = part.indexOf(':');
    const key = part.slice(0, colonIndex).trim();

    if (!key) {
      return;
    }

    const value = part.slice(colonIndex + 1).trim();

    resultObject[key] = value;
  };

  splittedString.forEach(callback);

  return resultObject;
}

module.exports = convertToObject;
