'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
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
