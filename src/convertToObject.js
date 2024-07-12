'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  sourceString.split(';').forEach((item) => {
    const pairs = item.trim().split(':');
    let key;
    let value;

    if (pairs.length === 2) {
      key = pairs[0].trim();
      value = pairs[1].trim();
    }
    obj[key] = value;
  });

  return obj;
}

module.exports = convertToObject;
