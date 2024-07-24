'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((styles) => styles.trim())
    .filter((styles) => styles !== '')
    .reduce((cssStyles, styles) => {
      const [key, value] = styles.split(':').map((item) => item.trim());

      if (key && value) {
        cssStyles[key] = value;
      }

      return cssStyles;
    }, {});
}

module.exports = convertToObject;
