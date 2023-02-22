'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .filter(style => style.trim().length > 0)
    .map(style => style.trim())
    .reduce((styles, style) => {
      const nameOfStyle = style.split(':')[0].trim();
      const valueOfStyle = style.split(':')[1].trim();

      styles[nameOfStyle] = valueOfStyle;

      return styles;
    }, {});
}

module.exports = convertToObject;
