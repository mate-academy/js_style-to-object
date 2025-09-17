'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((segment) => {
      const parts = segment.split(':');

      if (parts.length < 2) {
        return null;
      }

      const key = parts[0].trim();
      const value = parts.slice(1).join(':').trim();

      if (!key || !value) {
        return null;
      }

      return [key, value];
    })
    .filter(Boolean)
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
