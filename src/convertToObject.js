'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(cssString) {
  if (!cssString.trim()) {
    return {};
  }

  return cssString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule)
    .reduce((acc, rule) => {
      const [property, ...valueParts] = rule.split(':');

      if (!property || !valueParts.length) {
        return acc;
      }

      const key = property.trim();
      const value = valueParts.join(':').trim();

      acc[key] = value;

      return acc;
    }, {});
}

module.exports.default = convertToObject;
