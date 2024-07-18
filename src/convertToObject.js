'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString.split(';').reduce((prev, next) => {
    const [key, value] = next.split(':').map((item) => item.trim());

    prev[key] = value;

    return prev;
  }, {});
}

module.exports = convertToObject;
