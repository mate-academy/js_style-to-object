'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (sourceString) {
    const lines = sourceString.split(';')
      .map(line => line.split(':'))
      .filter(line => line.length === 2);

    for (let i = 0; i < lines.length; i++) {
      result[lines[i][0].trim()] = lines[i][1].trim();
    }

    return result;
  }

  return {};
}

module.exports = convertToObject;
