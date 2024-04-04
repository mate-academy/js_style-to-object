'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = sourceString
    .split(';')
    .filter((style) => style.trim().length > 0)
    .reduce((acc, style) => {
      const [styleName, styleValue] = style.split(':');

      acc[styleName.trim()] = styleValue.trim();

      return acc;
    }, {});

  return cssStyles;
}

module.exports = convertToObject;
