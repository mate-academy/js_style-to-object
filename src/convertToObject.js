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
  const strToArr = sourceString.split(';');
  const arrModified = strToArr.map(string => string.trim());
  const arrOfArrays = arrModified.map(string => string.split(':'));

  function callback(prev, arr) {
    return {
      ...prev,
      [arr[0].trim()]: arr[1].trim(),
    };
  }

  const result = arrOfArrays.filter(a => a.length === 2).reduce(callback, {});

  return result;
}

module.exports = convertToObject;
