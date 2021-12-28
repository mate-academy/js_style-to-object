'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const words = sourceString.split(';');
  const cssCode = {};

  words.forEach((word, index) => {
    const wordTrim = word.trim();

    words[index] = wordTrim;

    if (wordTrim === '') {
      words.splice(index, 1);
    }
  });

  words.forEach((word, index) => {
    const wordTrim = word.trim();

    words[index] = wordTrim;

    if (wordTrim === '') {
      words.splice(index, 1);
    }
  });

  words.forEach((word, index) => {
    words.splice(index, 1, word.split(':'));
  });

  words.forEach((word) => {
    cssCode[word[0].trim()] = word[1].trim();
  });

  return cssCode;
}

module.exports = convertToObject;
