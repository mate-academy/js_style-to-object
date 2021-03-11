'use strict';

/**
 * Implement convertToresultect function:
 *
 * Function takes string with styles
 * and returns resultect where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {resultect}
 */
function convertToresultect(sourceString) {
  // write your code here
  const result = {};
  const arr = sourceString.split(';').map(i => i.trim()).filter(
    i => i.length !== 0);

  for (let j = 0; j < arr.length; j++) {
    arr[j] = arr[j].split(':').map(item => item.trim());
    result[arr[j][0]] = arr[j][1];
  }

  return result;
}

module.exports = convertToresultect;
