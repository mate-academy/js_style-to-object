'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split('\n');
  const arr = lines.reduce((acc, item) => {
    const [key, ...rest] = item.trim().split(' ');

    if (key) {
      acc[key] = rest.join(' ');
    }

    return acc;
  }, {});

  return arr;
}

module.exports = convertToObject;
