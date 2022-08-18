'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleCssObject = {};

  sourceString.split(';')
    .forEach((currentElement) => {
      const currentValue = currentElement.split(':');

      if (currentValue[1]) {
        styleCssObject[currentValue[0].trim()] = currentValue[1].trim();
      }
    });

  return styleCssObject;
}

module.exports = convertToObject;
