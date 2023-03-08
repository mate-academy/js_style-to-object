'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayFromString = sourceString.split(';').map(item => item.trim());

  const entries = arrayFromString.map(item => item.trim())
    .map(item => item.split(':'))
    .map(items => items
      .map(item => item.trim()));

  const styleObject = Object.fromEntries(entries
    .filter(items => items.length > 1));

  return styleObject;
}

module.exports = convertToObject;
