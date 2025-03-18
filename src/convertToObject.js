'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.includes(':'))
    .reduce((acc, rule) => {
      const [property, ...valueParts] = rule.split(':');
      const key = property.trim();
      const value = valueParts.join(':').trim();

      if (key) {
        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
