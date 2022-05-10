'use strict';

const stylesString = require('./stylesString');

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
  // write your code here
  const resultObj = {};

  stylesString
    .split(';')
    .map(style => style.trim())
    .filter(item => item !== '')
    .forEach(x => {
      resultObj[x.split(':')[0].trim()] = x.split(':')[1].trim();
    });

  return resultObj;
}

module.exports = convertToObject;
