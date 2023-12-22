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
  return sourceString
    .split(';')
    .slice(0, -1)
    .filter(style => style.trim().length !== 0)
    .map(style => {
      const [property, value] = style.split(':');

      return { [property.trim()]: value.trim() };
    })
    .reduce((prev, obj) => ({
      ...prev, ...obj,
    }), {});
}

module.exports = convertToObject;
