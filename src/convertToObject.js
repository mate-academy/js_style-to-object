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
    const [key, value] = item.split(':');

    if (key.trim() && value.trim()) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
