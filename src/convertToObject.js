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
  const finalStyles = {};

  const initialStyles = style => (
    style
      .split(':')
      .map(x => x.trim())
      .join(': ')
  );

  const stylesArray = sourceString
    .split(';')
    .map(style => initialStyles(style))
    .filter(element => element !== '');

  stylesArray.forEach(property => {
    const [value, key] = property.split(': ');

    finalStyles[value] = key;
  });

  return finalStyles;
}

module.exports = convertToObject;
