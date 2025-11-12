'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  if (!sourceString.trim()) {
    return {};
  }

  return sourceString
    .replace(/\t/g, ' ')
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule)
    .reduce((cssProperties, rule) => {
      const [property, ...valueParts] = rule.split(':');

      if (!valueParts.length) {
        return cssProperties;
      }

      const key = property.trim();
      const value = valueParts.join(':').replace(/^\s+|\s+$/g, '');

      if (key && value) {
        cssProperties[key] = value;
      }

      return cssProperties;
    }, {});
}

module.exports = convertToObject;
