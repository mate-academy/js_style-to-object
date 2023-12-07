'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObj = {};
  const parts = sourceString.split(';');

  parts.forEach(part => {
    const splitter = part.split(':');

    if (splitter.length === 2) {
      const key = splitter[0].trim();
      const value = splitter[1].trim();

      cssObj[key] = value;
    }
  });

  return cssObj;
}

module.exports = convertToObject;
