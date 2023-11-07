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
  const objectOfStyles = {
  };
  const arrayOfstyles = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style.length !== 0);

  arrayOfstyles.forEach(element => {
    const [key, value] = element.split(':');

    objectOfStyles[key.trim()] = value.trim();
  });

  return objectOfStyles;
}

module.exports = convertToObject;
