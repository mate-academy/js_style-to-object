'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = sourceString.split(';')
    .map(propertyString => propertyString.trim().split(':')
      .map(part => part.trim()))
    .filter(([key, value]) => key && value)
    .reduce((styles, [key, value]) => {
      styles[key] = value;

      return styles;
    }, {});

  return cssStyles;
}

module.exports = convertToObject;
