'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newString = sourceString
    .split(';')
    .map((item) => item.trim())
    .join(':')
    .split(':')
    .map((item) => item.trim())
    .filter((item) => item !== '' && item !== "'");

  const result = {};

  for (let i = 0; i < newString.length; i += 2) {
    result[newString[i]] = newString[i + 1];
  }

  return result;
}

module.exports = convertToObject;
