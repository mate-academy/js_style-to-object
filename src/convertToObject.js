'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 *  [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfStyles = sourceString
    .split(';')
    .map(styles => styles.split(':'))
    .filter(style => style.length === 2);

  const objectOfStyles = arrayOfStyles
    .reduce((acc, [styles, value]) => ({
      ...acc, [styles.trim()]: value.trim(),
    }), {});

  return objectOfStyles;
}

module.exports = convertToObject;
