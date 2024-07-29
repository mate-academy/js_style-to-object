'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const splitBySentence = sourceString.split(';');

  for (let i = 0; i < splitBySentence.length; ++i) {
    const current = splitBySentence[i].trim();

    if (current) {
      const [key, value] = current.split(':');

      if (key && value) {
        result[key.trim()] = value.trim();
      }
    }
  }

  return result;
}

module.exports = convertToObject;
