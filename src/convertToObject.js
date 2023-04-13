'use strict';

// const stylesString = require('./stylesString');

/**
 * Implement convertToObject function:
 *
 * Function takes a string with
 * styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObj = {};

  sourceString
    .split(';')
    .map(item => item.split(':'))
    .map(arr => arr.map(item => item.trim()))
    .forEach(([key, value]) => {
      if (key !== '') {
        cssObj[key] = value;
      }
    });

  return cssObj;
};

module.exports = convertToObject;
