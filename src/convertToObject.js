'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule)
    .reduce((acc, rule) => {
      const [property, ...valueParts] = rule.split(':');

      if (!property || valueParts.length === 0) {
        return acc;
      }

      const key = property.trim();
      const value = valueParts.join(':').trim();

      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
