'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with
 * styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedString = sourceString.split('\n');
  const objWithStyles = {};

  splittedString.forEach(string => {
    const [prop, value] = string.split(':');

    if (prop && value) {
      objWithStyles[prop.trim()] = value.replace(/;/g, '').trim();
    }
  });

  return objWithStyles;
}

module.exports = convertToObject;
