'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arr = sourceString.split(';');

  const obj = {};

  arr.map((item, index) => {
    const [rawKey, rawValue] = item.split(':');
    const key = rawKey?.trim();
    const value = rawValue?.trim();

    if (key && value) {
      obj[key] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
