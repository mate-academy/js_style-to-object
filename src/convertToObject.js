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
  const arrayWithCSS = sourceString.trim().split(';');
  const newObj = {};

  for (const key in arrayWithCSS) {
    const arrayWithIndexes = arrayWithCSS[key].trim().split(':');
    if (arrayWithIndexes[0] !== '') {
      newObj[arrayWithIndexes[0]] = arrayWithIndexes[1].trim();
    }
  }

  return newObj;
}

module.exports = convertToObject;
