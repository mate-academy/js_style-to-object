'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(string) {
  const obj = {};

  string.split(';').forEach((el) => {
    const parts = el.split(':');

    if (parts.length < 2) {
      return;
    }

    const key = parts[0].trim();
    const value = parts[1].trim();

    obj[key] = value;
  });

  return obj;
}

module.exports = convertToObject;
