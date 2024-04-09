'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = sourceString
    .split(';')
    .map((styleStr) => styleStr.trim())
    .filter(([property, value]) => property && value)
    .reduce((acc, style) => {
      const [property, propertyValue] = style
        .split(':')
        .map((clear) => clear.trim());

      acc[property] = propertyValue;

      return acc;
    }, {});

  return cssStyles;
}

module.exports = convertToObject;
