'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, item) => {
    const [rawKey, rawValue] = item.split(':');
    const key = rawKey && rawKey.replace(/\s/g, '');
    const value = rawValue && rawValue.trim();

    if (key && value) {
      acc[key] = value;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
