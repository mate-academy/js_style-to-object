'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(cssString) {
  const rules = cssString.split(';').filter(Boolean);
  const obj = {};

  rules.forEach((rule) => {
    const [property, value] = rule.split(':');

    if (property && value) {
      const cleanProperty = property.trim();
      const cleanValue = value.trim();

      obj[cleanProperty] = cleanValue;
    }
  });

  return obj;
}

module.exports = convertToObject;
