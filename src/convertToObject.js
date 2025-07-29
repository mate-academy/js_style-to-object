'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((row) => row.trim())
    .filter((row) => row.length > 0)
    .map((row) => {
      const [key, value] = row.split(':');

      return [key.trim(), value.trim()];
    })
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
}

module.exports = convertToObject;
