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
  const stylesArray = sourceString
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '');

  const stylesObject = {};

  stylesArray.forEach(line => {
    const colonIndex = line.indexOf(':');

    if (colonIndex !== -1) {
      const property = line.substring(0, colonIndex);
      const value = line.substring((colonIndex + 1), (line.length - 1));
      const propertyName = property.trim();
      const propertyValue = value.trim();

      stylesObject[propertyName] = propertyValue;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
