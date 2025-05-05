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
    .reduce((styleMap, rule) => {
      const [rawProperty, ...rawValueParts] = rule.split(':');
      const property = rawProperty.trim();
      const value = rawValueParts.join(':').trim();

      if (property && value) {
        styleMap[property] = value;
      }

      return styleMap;
    }, {});
}

module.exports = convertToObject;
