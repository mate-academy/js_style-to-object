'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const beforeForEach = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item !== '');

  return beforeForEach.reduce((acc, item) => {
    const pair = item.split(':');
    const key = pair[0].trim();
    const value = pair[1].trim();

    acc[key] = value;

    return acc
  } {});
}

module.exports = convertToObject;
