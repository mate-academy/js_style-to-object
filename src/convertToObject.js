'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = sourceString.split(';').reduce((acc, str) => {
    if (str.trim()) {
      const [key, value] = str.split(':');

      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});

  return res;
}

module.exports = convertToObject;
