'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitBySemicolon = sourceString.trim().split(';');
  const result = {};

  for (const element of splitBySemicolon) {
    const [key, value] = element.split(':');

    if (value === undefined) {
      continue;
    }

    result[key.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
