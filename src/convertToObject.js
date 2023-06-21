/* eslint-disable max-len */
'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const sourceObj = sourceString.split(';')
    .map(source => source.trim())
    .filter(source => source.length > 1)
    .map(source => source.split(':'))
    .reduce((obj, [key, value]) => {
      return {
        ...obj, [key.trim()]: value.trim(),
      };
    }, {});

  return sourceObj;
}

module.exports = convertToObject;
