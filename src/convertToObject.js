'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const words = sourceString.split(';');

  const myObj = {};

  for (const word of words) {
    const splitedWords = word.split(':');

    if (splitedWords.length === 2) {
      const [key, value] = splitedWords;

      myObj[key.trim()] = value.trim();
    }
  }

  return myObj;
}

module.exports = convertToObject;
