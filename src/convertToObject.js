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
  const entriesFromString = sourceString.split(';')
    .map(entries => entries.split(':')
      .map(keyValue => keyValue.trim()))
    .filter(entries => entries.length > 1);

  const objectStyles = Object.fromEntries(entriesFromString);

  return objectStyles;
}

module.exports = convertToObject;
