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
  return sourceString
    .split('\n')
    .filter(string => string.trim().length > 2)
    .map(item => item.split(':').map(x => x.trim()))
    .reduce((obj, arr) => {
      const y = {};

      y[arr[0]] = arr[1].split(';')[0].trim();

      return Object.assign(obj, y);
    }, {});
}

module.exports = convertToObject;
