'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((pair) => {
    const [key, value] = pair.split(':');

    if (value !== undefined) {
      result[key.replace(/^\s+|\s+$/g, '')] = value.replace(/^\s+|\s+$/g, '');
    }
  });

  return result;
}

module.exports = convertToObject;
