'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const style = {};

  sourceString
    .split(';')
    .forEach(element => {
      const possession = element.split(':');

      if (possession.length !== 1) {
        style[possession[0].trim()] = possession[1].trim();
      }
    });

  return style;
}

module.exports = convertToObject;
