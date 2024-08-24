'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const x = sourceString
    .toString()
    .split(';')
    .map((item) => item.toString().split(':'));

  x.map((item) => {
    if (!(item[1] === undefined)) {
      result[item[0].trim()] = item[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
