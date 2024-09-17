'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const pair = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el !== '');
  const pairSplit = pair.map((el) => el.split(':').map((item) => item.trim()));

  const result = {};

  for (const item of pairSplit) {
    const key = item[0];
    const value = item[1];

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
