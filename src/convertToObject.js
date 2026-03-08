'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  if (!sourceString) {
    return styleObject;
  }

  sourceString
    .split(';')
    .map(rule => rule.trim())
    .filter(rule => rule)
    .forEach((rule) => {
      const [property, ...valueParts] = rule.split(':');

      if (!property || valueParts.length === 0) {
        return;
      }

      const key = property.trim();
      const value = valueParts.join(':').trim();

      styleObject[key] = value;
    });

  return styleObject;
}

module.exports = convertToObject;