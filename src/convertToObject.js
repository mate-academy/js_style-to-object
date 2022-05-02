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
  const styles = sourceString.split(';')
    .map(style => style.split(':'));

  const formattedStyles = {};

  styles.forEach(style => {
    if (style.length > 1) {
      const property = style[0].trim();
      const value = style[1].trim();

      formattedStyles[property] = value;
    }
  });

  return formattedStyles;
}

module.exports = convertToObject;
