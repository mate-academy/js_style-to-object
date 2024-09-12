'use strict';

/**
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
