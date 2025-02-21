'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const newString = sourceString.trim().split(';');

  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === '') {
      continue;
    }

    const [key, value] = newString[i].split(':');

    if (!value) {
      continue;
    }

    const trimmedKey = key.trim();
    const trimmedValue = value.trim();

    result[trimmedKey] = trimmedValue;
  }

  return result;
}

module.exports = convertToObject;
