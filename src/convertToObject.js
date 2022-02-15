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
  const cssPropertiesObject = {};
  const lines = sourceString.split(';')
    .map(line => line.split(':'))
    .filter(line => line.length === 2);

  lines.forEach(line => {
    const property = line[0].trim();
    const value = line[1].trim();

    cssPropertiesObject[property] = value;
  });

  return cssPropertiesObject;
}

module.exports = convertToObject;
