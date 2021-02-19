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
  const strToObj = {};
  const elements = sourceString
    .split(';')
    .map(item => item
      .split(':')
      .map(element => element.trim()))
    .filter(item => item.length > 1);

  for (const item of elements) {
    strToObj[item[0]] = item[1];
  }

  return strToObj;
}

module.exports = convertToObject;
