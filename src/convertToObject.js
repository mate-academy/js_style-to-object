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
  const objectStyle = {};
  const arrayStyle = sourceString
    .split(';')
    .filter((style) => style.trim().length > 0)
    .map(property => property.split(';'));

  for (const [property, value] of arrayStyle) {
    objectStyle[property.trim()] = value.trim();
  }

  return objectStyle;
}

module.exports = convertToObject;
