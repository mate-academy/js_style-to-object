'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
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
  const sortedMess = sourceString
    .split(';')
    .map(a => a.split(':')
      .map(b => b.trim()));

  for (const element of sortedMess) {
    if (element[0] && element[1]) {
      resultStyles[element[0]] = element[1];
    }
  }

  return resultStyles;
}

module.exports = convertToObject;
