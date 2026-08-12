'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const pairs = sourceString
    .split(';')
    .map((pair) => pair.trim())
    .filter((val) => val !== '');

  for (const pair of pairs) {
    const [key, value] = pair.split(':').map((val) => val.trim());
    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
