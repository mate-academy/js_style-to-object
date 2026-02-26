'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule && rule.includes(':'))
    .reduce((obj, rule) => {
      const [key, value] = rule.split(':');

      obj[key.trim()] = value.trim();

      return obj;
    }, {});
}
module.exports = convertToObject;
