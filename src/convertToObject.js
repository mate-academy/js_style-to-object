'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.trim()) {
    return {};
  }

  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0)
    .map((rule) => {
      const parts = rule.split(':');

      if (parts.length < 2) {
        return null;
      }

      const key = parts[0].trim();
      const value = parts.slice(1).join(':').trim();

      return [key, value];
    })
    .filter(Boolean)
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
