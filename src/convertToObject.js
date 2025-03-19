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
    .reduce((styles, rule) => {
      const [property, value] = rule.split(':').map((part) => part.trim());

      return { ...styles, [property]: value };
    }, {});
}

module.exports = convertToObject;
