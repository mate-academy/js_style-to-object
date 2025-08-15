'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleMap = sourceString
    .split(';')
    .filter((str) => str.trim() !== '')
    .reduce((acc, item) => {
      const [rawKey, ...rawValueParts] = item.split(':');

      if (!rawKey || rawValueParts.length === 0) {
        return acc;
      }

      const key = rawKey.trim();
      const value = rawValueParts.join(':').trim();

      if (!key || !value) {
        return acc;
      }

      acc[key] = value;

      return acc;
    }, {});

  return styleMap;
}

module.exports = convertToObject;
