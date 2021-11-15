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
  const arr = sourceString.split(';').filter((el) =>
    el !== '' || el !== ' ');
  const result = {};
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].trim().toLowerCase() !== arr[i].trim().toUpperCase()) {
      newArr.push(arr[i]);
    }
  }

  const trim = newArr.map((index) =>
    index.trim()).join(':').split(':').map((x) =>
    x.trim());

  for (let i = 0; i < trim.length; i += 2) {
    result[trim[i]] = trim[i + 1];
  }

  return result;
}

module.exports = convertToObject;
