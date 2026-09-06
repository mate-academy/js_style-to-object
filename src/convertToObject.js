'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      return acc;
    }

    const [key, value] = trimmed.split(':');

    acc[key.trim()] = value.trim();

    return acc;
  }, {});
}

module.exports = convertToObject;
