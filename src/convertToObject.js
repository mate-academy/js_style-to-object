'use strict';

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
  const sourceArray = sourceString.split(';');

  let trimmedWord;
  let trimmedArray;
  let result = {};

  sourceArray.map(word => {
    trimmedWord = word.trim();
    trimmedArray = trimmedWord.split(':');

    if (trimmedArray.length > 1) {
      result = {
        ...result,
        [trimmedArray[0].trim()]: trimmedArray[1].trim(),
      };
    }
  });

  return result;
}

module.exports = convertToObject;
