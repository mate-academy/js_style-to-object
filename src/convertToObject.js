'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const res = {};

  sourceString.split(';'
  ).map(
    (a) => a.split(':'
    ).map(
      (c) => c.trim())
  ).filter(
    (a) => a[0] !== '' && a[0] !== undefined
  ).map(
    (a) => {
      res[a[0]] = a[1];
    });

  return res;
}

module.exports = convertToObject;
