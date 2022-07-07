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
  const styles = {};
  const stylesArray = sourceString
    .split(';').map(string => string.trim())
    .filter(string => string !== '');

  for (const style of stylesArray) {
    const styleString = style.split(':').map(item => item.trim());
    const key = styleString[0];
    const value = styleString[1];

    styles[key] = value;
  }

  return styles;
}

module.exports = convertToObject;
