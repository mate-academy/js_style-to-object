'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line)
    .reduce((cssStyles, line) => {
      const [cssProperty, cssValue] = line.split(':').map((el) => el.trim());

      if (cssProperty && cssValue) {
        cssStyles[cssProperty] = cssValue;
      }

      return cssStyles;
    }, {});
}

module.exports = convertToObject;
