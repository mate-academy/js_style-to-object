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
    .split(';')
    .filter(item => item.trim() !== '')
    .map(item => {
      const splitted = item.split(':');

      return {
        key: splitted[0].trim(),
        value: splitted[1].trim(),
      };
    })
    .reduce((prev, item) => {
      prev[item.key] = item.value;

      return prev;
    }, {});
}

module.exports = convertToObject;
