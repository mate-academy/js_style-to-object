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
  let styles = sourceString
    .split(';')
    .map(property => property.trim())
    .map(property => property.split(':')
      .map(item => item.trim()));

  styles = Object.fromEntries(styles);

  delete styles[''];

  return styles;
}

module.exports = convertToObject;
