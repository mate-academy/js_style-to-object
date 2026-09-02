'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const pairs = sourceString.split(';').filter((pair) => pair.trim() !== '');

  for (const pair of pairs) {
    const [key, value] = pair.split(':').map((s) => s.trim());

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
