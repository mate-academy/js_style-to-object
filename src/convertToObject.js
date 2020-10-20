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
  const arrSourceString = sourceString.split(';');

  const result = arrSourceString.map(item => item.trim().split(':')
    .map(elem => elem.trim()))
    .filter(item => item.find(elem => elem.length > 0));

  return Object.fromEntries(result);
};

module.exports = convertToObject;
