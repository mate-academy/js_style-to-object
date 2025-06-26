'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const res = {};

  sourceString
    .split(';')
    .map((el) => el.split(':').map((i) => i.trim()))
    .filter((el) => el.length > 1)
    .map((el) => {
      const key = el[0];
      const value = el[1];

      res[key] = value;
    });

  return res;
}

module.exports = convertToObject;
