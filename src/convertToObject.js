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
  const modifiedString = sourceString
    .split(/:|;/)
    .map(word => word.replace(/\n/g, '')
      .trim())
    .filter(x => x !== '');

  return modifiedString.reduce((prev, word, index, words) =>
    (index % 2 === 0 || index === 0 ? {
      ...prev, [`${word}`]: words[index + 1],
    }
      : { ...prev }
    ), {});
}

module.exports = convertToObject;
