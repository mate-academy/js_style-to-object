'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const strings = sourceString.split(';');
  const result = {};

  strings.forEach((style) => {
    const trimmed = style.trim();

    if (trimmed === '') {
      return;
    }

    if (!trimmed.includes(':')) {
      return;
    }

    const [key, value] = trimmed.split(':');

    result[key.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
