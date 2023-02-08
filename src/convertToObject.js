'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const str = sourceString.split(';').filter(
    item => item.includes(':') && item.length > 1
  );

  for (let i = 0; i < str.length; i++) {
    const [key, value] = str[i].split(':');

    result[key.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
