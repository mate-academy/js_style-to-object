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
  let styles = sourceString.split(';').map(string => string.trim())
    .filter(string => string !== '');

  styles = styles.map(style => style.split(':')
    .map(item => item.trim()));

  const result = {};

  styles.forEach(function(style) {
    result[style[0]] = style[1];
  });

  return result;
}

module.exports = convertToObject;
