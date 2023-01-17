'use strict';

// const stylesString = require('./stylesString');

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const words = sourceString.split(';');

  const obj = {};

  words.forEach(function(word) {
    const splitedWord = word.split(':');

    if (splitedWord.length === 2) {
      const [key, value] = splitedWord;

      obj[key.trim()] = value.trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
