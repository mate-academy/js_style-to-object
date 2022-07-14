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
  const cssToObj = {};

  sourceString.split(';').map(property => {
    return property.split(':');
  }).map(property => {
    if (property.length > 1) {
      cssToObj[property[0].trim()] = property[1].trim();
    }
  });

  return cssToObj;
}

module.exports = convertToObject;
