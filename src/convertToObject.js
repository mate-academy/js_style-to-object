'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const pairs = sourceString.split('&');

  pairs.forEach((pair) => {
    const [key, value] = pair.split('=');

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
