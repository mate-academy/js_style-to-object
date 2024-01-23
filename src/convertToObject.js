'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectStyles = {};

  let arrayStyles = [];

  arrayStyles = ((sourceString.split(';')).map(item =>
    item.trim())).filter(item => item !== '');

  for (const element of arrayStyles) {
    const array = element.split(':');

    objectStyles[array[0].trim()] = array[1].trim();
  }

  return objectStyles;
}

module.exports = convertToObject;
