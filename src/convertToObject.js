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

  const stylesObject = stylesArray.reduce((acc, string) => {
    const [propertyName, propertyValue] = string.split(':');

    acc[propertyName.trim()] = propertyValue.trim();

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
