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
    .map(x => x.split(':')
      .map(y => y.trim()))
    .filter(z => z[0] !== '')
    .reduce((css, property) => {
      css[property[0]] = property[1];

      return css;
    }, {});
}

module.exports = convertToObject;
