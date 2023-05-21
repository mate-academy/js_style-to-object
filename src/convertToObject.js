'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
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
    .split(';')
    .map(string => string.trim())
    .filter(string => string);

  const stylesObject = {};

  stylesArray.forEach(string => {
    const property = string.split(':');
    const propertyName = property[0].trim();
    const propertyValue = property[1].trim();

    stylesObject[propertyName] = propertyValue;
  });

  return stylesObject;
}

module.exports = convertToObject;
