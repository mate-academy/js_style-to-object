'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const props = sourceString.split(';')
    .map(el => el.split('').filter(el1 => el1 !== '\n').join(''))
    .map(el => el.split(':').map(el1 => el1.trim()).join(':'))
    .filter(el => el.length > 0).map(el => el.split(':'));

  const result = {};

  for (const i of props) {
    result[i[0]] = i[1];
  }

  return result;
}

module.exports = convertToObject;
