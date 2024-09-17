'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');
  const styleSheet = {};

  for (const words of stylesArray) {
    const word = words.split(':');

    if (word.length > 1) {
      styleSheet[word[0].trim()] = word[1].trim();
    }
  }

  return styleSheet;
}

module.exports = convertToObject;
