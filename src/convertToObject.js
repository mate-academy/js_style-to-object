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

  const styleObject = newString.reduce((acc, pair) => {
    const parts = pair.split(':');
    const key = parts[0].trim();
    const value = parts[1].trim();

    if (parts.length < 2) {
      return acc;
    }

    acc[key] = value;

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
