'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const keyValue = sourceString
    .split(';')
    .map(item => item.split(':').map(word => word.trim()))
    .filter(arr => arr.length === 2);

  return Object.fromEntries(keyValue);
}

module.exports = convertToObject;
