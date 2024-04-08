'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const cssStyles = {};

  styles
    .filter((style) => style.trim())
    .forEach((style) => {
      const parts = style.split(':');
      const styleKey = parts[0];
      const styleValue = parts[1];

      cssStyles[styleKey.trim()] = styleValue.trim();
    });

  return cssStyles;
}

module.exports = convertToObject;
