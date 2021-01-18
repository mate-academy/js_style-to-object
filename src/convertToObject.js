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
  // write your code here
  const arr = sourceString.split(';').filter(e => {
    const [a, b] = e.split(':');

    return a && b;
  });

  const obj = {};

  arr.forEach((string, i) => {
    const [key, value] = string.split(':');

    obj[key.trim()] = value.trim();
  });

  return obj;
}

module.exports = convertToObject;
