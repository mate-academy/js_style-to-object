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
  const arrWithStyles = sourceString
    .split(';')
    .map(str => str.trim())
    .filter(str => str.length > 1);

  const objWithStyles = arrWithStyles.reduce((prev, str) => {
    const arrWithValues = str.split(':');
    const key = arrWithValues[0].trim();
    const value = arrWithValues[1].trim();

    return {
      ...prev,
      [key]: value,
    };
  }, {});

  return objWithStyles;
}

module.exports = convertToObject;
