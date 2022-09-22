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
  let classes = sourceString.split(';');
  const classObject = {};

  classes.map(style => {
    classes = style.split(':');

    if (classes[0] && classes[1]) {
      classObject[classes[0].trim()] = classes[1].trim();
    }
  });

  return classObject;
}

module.exports = convertToObject;
