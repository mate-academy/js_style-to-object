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
  const pairs = sourceString.split(';');
  const result = {};
  let array = [];

  for (const item of pairs) {
    array.push(item.split(':').map(word => word.trim()));
  }

  array = array.filter(element => element.length > 1);

  for (const item of array) {
    result[item[0]] = item[1];
  }

  return result;
}

module.exports = convertToObject;
