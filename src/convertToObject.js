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
  const elements = sourceString
    .split(';')
    .map(el => el.trim())
    .filter(el => el !== '');

  const result = {};

  for (const style of elements) {
    const [property, value] = style.split(':');
    const convertedProp = property.trim();
    const convertedValue = value.trim();

    result[convertedProp] = convertedValue;
  }

  return result;
}

module.exports = convertToObject;
