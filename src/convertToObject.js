'use strict';

/* const stylesString = require('./stylesString'); */

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 *  properties (see an exampl in [test file]
 * (./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map(element => element.trim())
    .filter(element => element.length > 1)
    .map(element => element
      .split(':')
      .map(property => property.trim()));

  return Object.fromEntries(styles);
}

module.exports = convertToObject;
