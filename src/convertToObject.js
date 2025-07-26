'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const lines = sourceString
    .replace(/\t/g, '')
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.includes(':'));

  lines.forEach((string) => {
    const sliceIndex = string.indexOf(':');

    const key = string.slice(0, sliceIndex).trim();
    const value = string.slice(sliceIndex + 1).trim();

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
