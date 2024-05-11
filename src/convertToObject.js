'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let lines = sourceString.split(';');
  let temp;
  const result = {};

  lines = lines.filter((string) => string.trim() !== '');

  if (!sourceString) {
    return {};
  }

  if (lines.length === 1) {
    temp = lines[0].split(':');
    result[temp[0].trim()] = temp[1].trim();

    return result;
  }

  for (let i = 0; i < lines.length; i++) {
    temp = lines[i].split(':');
    result[temp[0].trim()] = temp[1].trim();
  }

  return result;
}

module.exports = convertToObject;
