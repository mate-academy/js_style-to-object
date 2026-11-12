'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  const res = {};

  arr
    .filter((str) => str.trim() !== '')
    .forEach((str) => {
      const val = str.split(':');
      const key = val[0].trim();
      const value = val[1].trim();

      res[key] = value;
    });

  return res;
}

module.exports = convertToObject;
