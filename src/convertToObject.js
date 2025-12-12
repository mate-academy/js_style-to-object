'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  if (sourceString.length === 0) {
    return result;
  }

  sourceString
    .split(';')
    .map((el) =>
      el
        .trim()
        .split(':')
        // eslint-disable-next-line prettier/prettier
        .map((item) => item.trim()))
    .forEach((el) => {
      if (el.length !== 1) {
        result[el[0]] = el[1];
      }
    });

  return result;
}

module.exports = convertToObject;
