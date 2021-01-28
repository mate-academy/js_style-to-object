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
  const arr = sourceString.split(';');
  let result = {};

  arr.forEach(item => {
    if (item.trim() !== '') {
      const styleArr = item.split(':');

      result = {
        ...result,
        [styleArr[0].trim()]: styleArr[1].trim(),
      };
    }
  });

  return result;
}

module.exports = convertToObject;
