'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(Boolean)
    .map(function (rule) {
      const parts = rule.split(':').map(function (part) {
        return part.trim();
      });

      const key = parts[0];
      const value = parts[1];

      return [key, value];
    })

    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
}

module.exports = convertToObject;
