'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const res = {};

  const pairs = sourceString.split(';');

  for (const pair of pairs) {
    const [key, value] = pair.split(':').map((part) => part.trim());

    if (key && value !== undefined) {
      res[key] = value;
    }
  }

  return res;
}

module.exports = convertToObject;
