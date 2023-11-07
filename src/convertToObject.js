'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(style => style.trim()) // Remove empty styles
    .map(style => {
      const [property, value] = style.split(':').map(part => part.trim());

      return { [property]: value };
    })
    .reduce((result, style) => ({
      ...result, ...style,
    }), {});
}

module.exports = convertToObject;
