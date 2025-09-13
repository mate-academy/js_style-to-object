'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  let arr = sourceString.split(';');

  arr = arr.map((str) => str.trim());

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split(':').map((str) => str.trim());
  }

  return arr.reduce((accumulator, currentValue) => {
    return { ...accumulator, [currentValue[0]]: currentValue[1] };
  }, {});
}

module.exports = convertToObject;
