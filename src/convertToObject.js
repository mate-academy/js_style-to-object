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
  const styleCss = {};

  const filteredString = sourceString
    .split(';')
    .map(style => style.split(':'))
    .filter(style => style.length === 2);

  filteredString.forEach(style => {
    styleCss[style[0].trim()] = style[1].trim();
  });

  return styleCss;
}

module.exports = convertToObject;
