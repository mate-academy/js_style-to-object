'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  sourceString
    .trim()
    .split(';')
    .map((item) => item.trim().split(':'))
    .map((item) => item.map((mapitem) => mapitem.trim()))
    .filter((item) => item && item.length > 1)
    .forEach((item) => {
      if (item) {
        obj[item[0]] = item[1];
      }
    });

  return obj;
}

module.exports = convertToObject;
