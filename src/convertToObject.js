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
  const resultStyles = {};
  const styles = sourceString.split(';')
    .map(x => x.trim().split(':').map(m => m.trim()))
    .filter(x => x.length !== 1);

  for (const char of styles) {
    resultStyles[char[0]] = char[1];
  }

  return resultStyles;
}

module.exports = convertToObject;
