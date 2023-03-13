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
  const cssObj = {};
  const attributes = sourceString.split(';');

  attributes.forEach(item => {
    const cssItem = item.split(':');

    if (cssItem[0] && cssItem[1]) {
      cssObj[cssItem[0].trim()] = cssItem[1].trim();
    }
  });

  return cssObj;
}

module.exports = convertToObject;
