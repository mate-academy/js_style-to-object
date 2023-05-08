'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const splittedStyles = sourceString.split(';');

  splittedStyles.forEach(style => {
    const [property, value] = style.split(':');

    if (value) {
      styles[property.trim()] = value.trim();
    };
  });

  return styles;
}
module.exports = convertToObject;
