'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitThis = sourceString.split(';');
  const result = {};

  for (const oneString of splitThis) {
    let word = '';
    let wordTwo = '';
    let fazeTwo = false;

    for (const symbol of oneString) {
      if (symbol.toLowerCase() !== symbol.toUpperCase() || symbol === '-') {
        if (fazeTwo !== true) {
          word += symbol;
        }
      }

      if (fazeTwo === true) {
        wordTwo += symbol;
      }

      if (symbol === ':') {
        fazeTwo = true;
      }
    }

    if (word.length !== 0) {
      result[word] = wordTwo.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
