'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  const slittedString = sourceString.split(';');
  const newArr = {};
  for (let i = 0; i < slittedString.length; i++) {
    if (slittedString[i].length > 1) {
      const line = slittedString[i].split(':');
      const key = line[0].trim();
      newArr[key] = line[1].trim();
    }
  }
  return newArr;
}

module.exports = convertToObject;
