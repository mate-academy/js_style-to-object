'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const styleRules = stylesString.split(';');

  const cssObject = styleRules.reduce((acc, rule) => {
    const [property, value] = rule.split(':');

    if (property && value) {
      acc[property.trim()] = value.trim();
    }

    return acc;
  },

  {});

  return cssObject;
}

module.exports = convertToObject;
