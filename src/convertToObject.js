'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styledObject = {};

  const styles = sourceString
    .split(';')
    .map(style => style.split(':'))
    .filter(style => style.length >= 2);

  styles.map(item => {
    const key = item[0].trim();
    const value = item[1].trim();

    styledObject[key] = value;
  });

  return styledObject;
}

// const stylesString1 = require('./stylesString');

// convertToObject(stylesString1);

module.exports = convertToObject;
