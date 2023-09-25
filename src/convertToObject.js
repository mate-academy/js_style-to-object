'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString.split(';');
  const stylesObject = {};
  const MIN_STYLE_LENGTH = 5;

  sourceArray.forEach(el => {
    if (el.length > MIN_STYLE_LENGTH) {
      const stylePair = el.split(':');

      Object.assign(stylesObject, {
        [stylePair[0].trim()]: stylePair[1].trim(),
      });
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
