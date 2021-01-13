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
  const arrOfString = sourceString.split(';');
  const result = {};

  arrOfString.filter(item => {
    if (item) {
      return item;
    }
  }).forEach(item => {
    const x = item.split(':');

    if (x[0].trim() && x[1].trim()) {
      result[x[0].trim()] = x[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
