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
  // write your code here
  return sourceString
    .split(';')
    .filter(style => style.split(':').length > 1)
    .map(style => {
      const property = {};

      property[style.split(':')[0].trim()] = style.split(':')[1].trim();

      return property;
    })
    .reduce((styles, key) => Object.assign(styles, key));
}

module.exports = convertToObject;
