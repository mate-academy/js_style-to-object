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
  const newArr = sourceString.split(';');

  function callback(prev, x) {
    const [key, value] = x.split(':');

    if (value.trim()) {
      prev[key.trim()] = value.trim();
    }

    return prev;
  }

  return newArr.reduce(callback, {});
}

module.exports = convertToObject;
