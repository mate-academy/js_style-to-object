'use strict';

/**

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const words = sourceString.split(';');
  const result = {};

  for (const word of words) {
    const splitedWord = word.split(':');

    if (splitedWord.length === 2) {
      const [key, value] = splitedWord;

      result[key.trim()] = value.trim();
    }
  }

  return result;
};

module.exports = convertToObject;
