'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(cssProperty => trimString(cssProperty))
    .filter(cssProperty => cssProperty !== '')
    .reduce((cssStyles, cssProperty) => {
      const [cssPropertyName, cssPropertyValue] = cssProperty.split(':');

      cssStyles[trimString(cssPropertyName)] = trimString(cssPropertyValue);

      return cssStyles;
    }, {});
}

function trimString(string) {
  return string.trim();
}

module.exports = convertToObject;
