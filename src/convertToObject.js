'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const pairs = sourceString.split(';');

  pairs.forEach((pair) => {
    if (pair.trim()) {
      const [key, value] = pair.split(':');

      obj[key.trim()] = value.trim();
    }
  });

  return obj;
}
module.exports = convertToObject;
