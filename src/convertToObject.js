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

  return Object.fromEntries(sourceString
    .match(/([-]|\w+).*\b/g)
    .map(el => [el.split(': ')[0].trim(), el.split(': ')[1].trim()]));
}

module.exports = convertToObject;
