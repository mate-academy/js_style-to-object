'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  let strArray = [];

  strArray = sourceString
    .split(';')
    .map((i) => i.trim())
    .filter((i) => i && i.includes(':'));

  const resultObj = strArray.reduce((acc, curr) => {
    let [x, y] = curr.split(':');

    x = x.trim();
    y = y.trim();
    acc[x] = y;

    return acc;
  }, {});

  return resultObj;
}

module.exports = convertToObject;
