'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parts = sourceString.split(';');
  const result = {};

  parts.forEach((element) => {
    if (!element.trim()) {
      return;
    }

    const [key, value] = element.split(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
