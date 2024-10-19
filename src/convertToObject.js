'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString.split(';').map((pair) => {
    const [key, value] = pair.trim().split(':');

    if (key && value) {
      return { [key.trim()]: value.trim() };
    }
  });

  return Object.assign({}, ...result);
}

module.exports = convertToObject;
