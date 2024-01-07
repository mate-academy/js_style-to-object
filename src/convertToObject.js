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
  const objectCss = sourceString
    .split(';')
    .map(item => item.split(':'))
    .map(item => item.map(value => value.trim()))
    .map(item => item.filter(value => value !== ''))
    .filter(item => item.length !== 0)
    .reduce((object, item) => {
      object[item[0]] = item[1];

      return object;
    }, {});

  return objectCss;
}

module.exports = convertToObject;
