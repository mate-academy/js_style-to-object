'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleanedString = sourceString.split(';');

  const result = cleanedString.reduce((acc, words) => {
    const [key, value] = words.split(':');

    if (key && value) {
      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
