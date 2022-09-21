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
  const styles = sourceString
    .split(';')
    .map((style) => style.split(':'))
    .filter(style => style[1] !== undefined);

  return styles.reduce((prev, style) => {
    return {
      ...prev,
      [style[0].trim()]: style[1].trim(),
    };
  }, 0);
}

module.exports = convertToObject;
