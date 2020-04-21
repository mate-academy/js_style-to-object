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
  const temp = sourceString.trim().replace(/\n/g, '').split(';');
  const obj = {};

  for (let i = 0; i < temp.length; i++) {
    if (temp[i].length > 0 & temp[i].includes(':')) {
      const parts = temp[i].split(':');

      obj[parts[0].trim()] = parts[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
