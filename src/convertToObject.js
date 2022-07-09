'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const splittedString = sourceString
    .split(';')
    .map(style => style.split(':'));

  const formattedString = splittedString
    .map(([style, value]) => style && value
      ? `${style.trim()}:${value.trim()}`
      : '')
    .filter(style => style !== '')
    .map(style => style.split(':'));

  return Object.fromEntries(formattedString);
}

module.exports = convertToObject;
