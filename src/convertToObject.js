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
  const styleArr = sourceString.replace(/\r|\n|/g, '').split(';');

  const css = {};

  styleArr.forEach(element => {
    if (element.replace(/\s/g, '').length === 0) {
      return;
    }
    css[element.split(':')[0].trim()] = element.split(':')[1].trim();
  });

  return css;
}

module.exports = convertToObject;
