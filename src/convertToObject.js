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
  const classes = sourceString.split(';');
  const classObject = {};

  classes.forEach(style => {
    const currentStyle = style.split(':');

    if (currentStyle[0] && currentStyle[1]) {
      classObject[currentStyle[0].trim()] = currentStyle[1].trim();
    }
  });

  return classObject;
}

module.exports = convertToObject;
