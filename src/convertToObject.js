'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';');

  const css = {};

  properties.forEach(propertie => {
    const key = propertie.split(':')[0];
    const value = propertie.split(':')[1];

    if (key && value) {
      const keyClear = propertie.split(':')[0].replace(/\s/g, '');
      const valueClear = propertie.split(':')[1].replace(/^\s+|\s+$/g, '');

      css[`${keyClear}`] = `${valueClear}`;
    }
  });

  return css;
}

module.exports = convertToObject;
