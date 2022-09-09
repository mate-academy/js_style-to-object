'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const strings = sourceString.split(';');

  for (let i = 0; i < strings.length; i++) {
    const str = strings[i];

    if (str.includes(':')) {
      const [key, value] = str.split(':');

      result[key.trim()] = value.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
