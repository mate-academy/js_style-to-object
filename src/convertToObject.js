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
  const convertedStyles = {};

  const cleanStyleList = sourceString
    .split(';')
    .map(item => item
      .replace(/\n/g, '')
      .trim())
    .filter(item => item !== '');

  // filling a result Object with keys and values
  cleanStyleList
    .forEach(item => (
      convertedStyles[item.split(':')[0].trim()]
        = item.split(':')[1].trim()));

  return convertedStyles;
}

module.exports = convertToObject;
