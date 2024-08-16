'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const result = {};
  let arr = sourceString.split(';');
  arr = arr.filter((rule) => rule.trim().length);
  for (const line of arr) {
    const [rule, value] = line.split(':');
    result[rule.trim()] = value.trim();
  }
  return result;
}

module.exports = convertToObject;
