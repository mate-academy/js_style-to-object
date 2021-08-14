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
  return sourceString
    .split(';')
    .map(string => string.split(':').map(subString => subString.trim()))
    .filter(trimmedString => trimmedString[0] !== '')
    .reduce((css, property) => {
      css[property[0]] = property[1];

      return css;
    }, {});
}

module.exports = convertToObject;
