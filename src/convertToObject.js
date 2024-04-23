'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = {};

  sourceString
    .split(';')
    .map((el) => el.split(':').map((e) => e.trim()))
    .filter((el) => el[0] !== '')
    .forEach(([key, value]) => {
      res[key] = value;
    });

  return res;
}

module.exports = convertToObject;
