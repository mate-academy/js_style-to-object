'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrProperties = sourceString
    .split(';')
    .map((property) => property.split(':'));

  const css = {};

  arrProperties.filter((property) => {
    const key = property[0].trim();
    const value = property[1] ? property[1].trim() : '';

    if (key.length) {
      css[key] = value;
    }
  });

  return css;
}

module.exports = convertToObject;
