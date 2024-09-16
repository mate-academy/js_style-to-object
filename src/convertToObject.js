'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .filter(style => style.trim().length > 0)
    .reduce((styles, style) => {
      const [nameOfStyle, valueOfStyle] = style
        .split(':')
        .map(stringPart => stringPart.trim());

      styles[nameOfStyle] = valueOfStyle;

      return styles;
    }, {});
}

module.exports = convertToObject;
