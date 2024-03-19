'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .filter((item) => item.trim())
    .map((str) => ({ [str.split(':')[0].trim()]: str.split(':')[1].trim() }))
    .reduce((prev, item) => ({ ...prev, ...item }), {});
}

module.exports = convertToObject;
