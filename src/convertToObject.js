'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString
    .split(';')
    .filter((string) => string.trim() !== '');

  const result = {};

  if (!sourceString) {
    return {};
  }

  lines.forEach((line) => {
    const temp = line.split(':');

    result[temp[0].trim()] = temp[1].trim();
  });

  return result;
}

module.exports = convertToObject;
