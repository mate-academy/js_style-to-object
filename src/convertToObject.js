'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .filter(item =>
      /\w+/.test(item))
    .map(item =>
      item.split(/:/)).reduce((css, property) => {
      css[property[0].trim()] = property[1].trim();

      return css;
    }, {});
}

module.exports = convertToObject;
