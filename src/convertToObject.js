'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styleObject = {};

  if (sourceString.length === 0) {
    return styleObject;
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
        styleObject[el[0]] = el[1];
      }
    });

  return styleObject;
}

module.exports = convertToObject;
