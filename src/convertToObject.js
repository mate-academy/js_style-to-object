'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style && style.includes(':'))
    .map((style) => {
      const [property, ...valueParts] = style.split(':');
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
