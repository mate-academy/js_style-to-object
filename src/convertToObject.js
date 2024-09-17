'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');

  return styles.reduce((cssStyles, style) => {
    if (style.trim()) {
      const parts = style.split(':');
      const styleKey = parts[0].trim();
      const styleValue = parts[1].trim();

      cssStyles[styleKey] = styleValue;
    }

    return cssStyles;
  }, {});
}

module.exports = convertToObject;
