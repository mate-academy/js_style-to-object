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
      const parts = row.split(':');
      const [key, value] = parts;

      if (parts.length < 2 || !key || !value) {
        return null;
      }

      return [key.trim(), value.trim()];
    })
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
}

module.exports = convertToObject;
