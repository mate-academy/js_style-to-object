'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const one = JSON.parse(JSON.stringify(sourceString)).split(';');
  const obj = {};

  for (let i = 0; i < one.length; i++) {
    if (one[i] !== undefined) {
      const tmp = one[i].split(':');

      if (tmp[1] !== undefined) {
        obj[tmp[0].toString().trim()] = tmp[1].trim();
      }
    }
  }

  return obj;
}

module.exports = convertToObject;
