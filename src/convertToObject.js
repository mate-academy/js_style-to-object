'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const splitStr = sourceString.split(';');
  const result = {};

  for (let i = 0, len = splitStr.length; i < len; i++) {
    if (!splitStr[i].includes(':')) {
      continue;
    }

    const [key, value] = splitStr[i].split(':');

    result[key.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
