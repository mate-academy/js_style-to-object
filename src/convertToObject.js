'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const res = {};

  for (const style of sourceString.trim().split(';')) {
    if (style.trim().length !== 0) {
      const el = style.split(':');

      res[el[0].trim()] = el[1].trim();
    }
  }

  return res;
}

module.exports = convertToObject;
