'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  for (const style of sourceString.split(';')) {
    const [key, value] = style.split(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
