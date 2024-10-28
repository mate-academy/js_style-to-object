'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string' || sourceString.trim() === '') {
    return {};
  }

  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule)
    .reduce((acc, rule) => {
      const [property, ...valueParts] = rule.split(':');
      const propertyTrimmed = property ? property.trim() : '';
      const value = valueParts.join(':').trim();

      if (propertyTrimmed && value) {
        acc[propertyTrimmed] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
