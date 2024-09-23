'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(cssString) {
  const rules = cssString.split(';').filter(Boolean);
  const styleObject = {};

  rules.forEach((rule) => {
    const [property, value] = rule.split(':');

    if (property && value) {
      const cleanProperty = property.trim();
      const cleanValue = value.trim();

      styleObject[cleanProperty] = cleanValue;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
