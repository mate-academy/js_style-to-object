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
  const objWithStyles = sourceString
    .split(';')
    .reduce((acc, string) => {
      const [prop, value] = string.split(':');

      if (prop && value) {
        acc[prop.trim()] = value
          .replace(/;/g, '')
          .trim();
      }

      return acc;
    }, {});

  return objWithStyles;
}

module.exports = convertToObject;
