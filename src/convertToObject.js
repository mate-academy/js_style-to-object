'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const CssStyles = {};

  styles
    .filter((style) => style.trim())
    .forEach((style) => {
      const styleKey = style.split(':')[0];
      const styleValue = style.split(':')[1];

      CssStyles[styleKey.trim()] = styleValue.trim();
    });

  return CssStyles;
}

module.exports = convertToObject;
