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
  const cssObj = {};
  const partObj = sourceString.split(';');

  partObj.forEach(part => {
    const key = part.split(':');

    if (key.length === 2) {
      const property = key[0].trim();
      const value = key[1].trim();

      cssObj[property] = value;
    }
  });

  return cssObj;
}

module.exports = convertToObject;
