'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const newString = sourceString.split(';');

  for (const obj of newString) {
    if (!obj.trim()) {
      continue;
    }

    const [key, value] = obj.split(':');

    if (!value) {
      continue;
    }

    result[key.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
