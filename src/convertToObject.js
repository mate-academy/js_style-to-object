'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = {};

  sourceString
    .split(';')
    .filter(styles => styles.trim().length)
    .forEach(style => {
      const [ styleName, styleValue ] = style.split(':');

      cssStyles[styleName.trim()] = styleValue.trim();
    });

  return cssStyles;
}

module.exports = convertToObject;
