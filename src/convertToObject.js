'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((line) => {
    const [key, value] = line.split(':', 2);

    if (key && value !== undefined) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
