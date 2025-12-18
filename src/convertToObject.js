'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const obj = {};

  sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.includes(':'))
    .forEach((rule) => {
      const [key, ...rest] = rule.split(':');
      const value = rest.join(':').trim();

      obj[key.trim()] = value;
    });

  return obj;
}

module.exports = convertToObject;
