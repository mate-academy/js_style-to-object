'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string' || !sourceString.trim()) {
    return {};
  }

  const result = {};

  sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .forEach((item) => {
      const [key, value] = item.split(':').map((part) => part.trim());

      if (key && value) {
        result[key] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
