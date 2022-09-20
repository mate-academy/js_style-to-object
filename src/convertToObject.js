'use strict';

/**
 * Implement convertToObject function:
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
  const cssStyles = sourceString
    .split(';')
    .map(style => {
      if (!style.trim()) {
        return {};
      }

      const cssStyle = style.split(':')
        .map(clearStyle => clearStyle.trim());

      const cssProperty = cssStyle[0];
      const cssValue = cssStyle[1];

      return { [cssProperty]: cssValue };
    })
    .reduce((prev, current) => {
      return {
        ...prev,
        ...current,
      };
    }, {});

  return cssStyles;
}

module.exports = convertToObject;
