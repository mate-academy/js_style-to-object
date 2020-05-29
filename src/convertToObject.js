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
  const obj = {};

  sourceString.trim().replace(/\n/g, '').split(';').map(item => {
    if (item.length > 0 & item.includes(':')) {
      const parts = item.split(':');

      obj[parts[0].trim()] = parts[1].trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
