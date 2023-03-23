'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 *  in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formatedStyles = {};

  const cssStyles = sourceString
    .split(';')
    .filter(style => style !== ' ' && style.trim());

  cssStyles.forEach(style => {
    const [key, value] = style
      .split(':')
      .map(prop => prop.trim());

    formatedStyles[key] = value;
  });

  return formatedStyles;
}

module.exports = convertToObject;
