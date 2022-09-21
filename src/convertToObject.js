'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an
 * example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const currentClasses = sourceString.split(';');

  currentClasses.forEach(property => {
    const style = property.split(':');

    if (style[0] && style[1]) {
      styleObject[style[0].trim()] = style[1].trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
