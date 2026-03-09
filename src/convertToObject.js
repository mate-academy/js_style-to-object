'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString
    .split(';')
    .filter((item) => item.trim() !== '')
    .reduce((acc, item) => {
      const [key, value] = item.split(':');

      acc[key.trim()] = value.trim();

      return acc;
    }, {});

  return result;
}

module.exports = convertToObject;
