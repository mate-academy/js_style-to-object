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
    .map((rule) => {
      const [property, ...valueParts] = rule.split(':');
      const key = property.trim();
      const value = valueParts.join(':').replace(/^\s+|\s+$/g, '');

      return [key, value];
    })
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
