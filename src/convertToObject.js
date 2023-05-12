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
  const valueStyles = sourceString.split(';')
    .filter(string => string.trim() !== '')
    .reduce((total, data) => {
      const [key, value] = data.split(':')
        .map(string => string.trim());

      return {
        ...total,
        [key]: value,
      };
    }, {});

  return valueStyles;
}

module.exports = convertToObject;
