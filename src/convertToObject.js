'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](
 * ./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssArray = sourceString
    .split(';')
    .join(':')
    .split(':')
    .map(element => (element.trim()))
    .filter(element => (element.length > 0));

  const cssKeys = cssArray.filter((_, i) => (i % 2 === 0));
  const cssValues = cssArray.filter((_, i) => !(i % 2 === 0));

  const cssTurnedObject = cssKeys.reduce((prev, key, index) => {
    return {
      ...prev,
      [`${key}`]: cssValues[index],
    };
  }, {});

  return cssTurnedObject;
}

module.exports = convertToObject;
