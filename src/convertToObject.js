'use strict';

// const stylesString = require('./stylesString');

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
  const result = {};
  const splitedString = sourceString
    .split(';')
    .filter(string => string.includes(':'));

  splitedString.forEach(item => {
    const [ key, value ] = item.split(':');

    result[key.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
