'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = sourceString
    .split(';')
    .filter((pair) => pair.trim() !== '')
    .reduce((acc, pair) => {
      const [key, value] = pair.split(':');

      acc[key.trim()] = value.trim();

      return acc;
    }, {});

  return obj;
}

module.exports = convertToObject;
