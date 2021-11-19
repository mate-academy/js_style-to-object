'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, cur) => {
    const [rawKey, rawValue] = cur.split(':');
    const key = rawKey && rawKey.trim();
    const value = rawValue && rawValue.trim();

    if (key && value) {
      acc[key] = value;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
