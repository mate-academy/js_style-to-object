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
  return sourceString
    .split(';')
    .filter(element => element.includes(':'))
    .map(str => str.split(':').map(element => element.trim()))
    .reduce((object, style) => {
      return {
        ...object,
        [style[0]]: style[1],
      };
    }, {});
}

module.exports = convertToObject;
