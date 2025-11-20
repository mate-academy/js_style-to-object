'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newString = sourceString
    .trim()
    .split(';')
    .map((value) => value.trim())
    .filter((value) => value !== '');

  const result = newString.reduce((acc, pair) => {
    const parts = pair.split(':');
    const key = parts[0].trim();
    const value = parts[1].trim();

    acc[key] = value;

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
