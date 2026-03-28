'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.trim().split(';');
  const arr = lines.reduce((acc, item) => {
    const [key, rest] = item.trim().split(': ');

    if (key) {
      acc[key.trim()] = rest.trim();
    }

    return acc;
  }, {});

  return arr;
}

module.exports = convertToObject;
