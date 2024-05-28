'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const obj = {};

  const beforeForEach = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item !== '');

  beforeForEach.forEach((item) => {
    const pair = item.split(':');
    const key = pair[0].trim();
    const value = pair[1].trim();

    obj[key] = value;
  });

  return obj;
}

module.exports = convertToObject;
