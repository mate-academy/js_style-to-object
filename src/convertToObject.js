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
  const cssConverted = {};

  const stylesArr = sourceString.split(';');

  const stylesValues = stylesArr
    .map(item => item.split(':')
      .map(value => value.trim()));

  const filteredStyles = stylesValues
    .filter(([property, value]) => property && value);

  filteredStyles.forEach(([property, value]) => {
    cssConverted[property] = value;
  });

  return cssConverted;
}

module.exports = convertToObject;
