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
  const ans = {};

  sourceString
    .split(';')
    .map(key => key
      .split(':')
      .map(elem => elem.trim()))
    .forEach(elem => {
      elem[0] && (ans[elem[0]] = elem[1]);
    });

  return ans;
}

module.exports = convertToObject;
