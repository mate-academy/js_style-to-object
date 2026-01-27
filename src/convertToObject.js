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
    .reduce((result, rule) => {
      const [property, ...valueParts] = rule.split(':');
      const value = valueParts.join(':').trim();

      result[property.trim()] = value;

      return result;
    }, {});
}

module.exports = convertToObject;
