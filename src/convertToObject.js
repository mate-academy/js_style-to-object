'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const pairs = sourceString.split(';');

  pairs.forEach((pair) => {
    const [key, value] = pair.split(':').map((str) => str.trim());

    if (key) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
