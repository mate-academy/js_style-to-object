'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  sourceString.split(';').forEach((obj) => {
    const [key, value] = obj.split(':');

    if (!key || !value) {
      return;
    }

    result[key.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
