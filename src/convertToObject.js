/* eslint-disable max-len */
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
  const styles = {};

  sourceString
    .replace(/\s+/g, ' ')
    .split(';')
    .map(propertie => propertie.trim())
    .filter(propertie => propertie)
    .map(propertie => {
      const [ propertieName, propertieValue ] = propertie.split(': ');

      styles[propertieName.trim()] = propertieValue;
    });

  return styles;
}

module.exports = convertToObject;
