'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(rule => rule.trim())
    .filter(rule => rule && rule.includes(':'))
    .reduce((styleObject, rule) => {
      const [property, ...valueParts] = rule.split(':');
      const value = valueParts.join(':').trim();

      return {
        ...styleObject,
        [property.trim()]: value,
      };
    }, {});
}

module.exports = convertToObject;
