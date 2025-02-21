'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parts = sourceString
    .split(';')
    .map((part) => part.trim())
    .filter((part) => part.length > 0)
    .map((part) => {
      const [key, value] = part.split(':');

      return [key.trim(), value.trim()];
    });

  return parts.reduce((result, [key, value]) => {
    result[key] = value;

    return result;
  }, {});
}

module.exports = convertToObject;
