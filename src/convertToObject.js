'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  sourceString.split(';').forEach((value) => {
    const cleanValue = value.trim();

    if (cleanValue) {
      const [x, y] = cleanValue.split(':');

      if (x && y) {
        obj[x.trim()] = y.trim();
      }
    }
  });

  return obj;
}

module.exports = convertToObject;
