'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const couple = sourceString.split(';');

  couple.forEach((item) => {
    const trimmed = item.trim();

    if (trimmed) {
      const [key, value] = trimmed.split(':');

      if (key && value) {
        obj[key.trim()] = value.trim();
      }
    }
  });

  return obj;
}

module.exports = convertToObject;
