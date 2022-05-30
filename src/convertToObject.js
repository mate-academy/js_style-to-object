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
  const cssProperties = {};
  const itemString = sourceString.split(';');
  const keyAndValues = itemString.map(keyValue => keyValue.split(':'));
  const keyAndValuesDefinite = keyAndValues.filter(keyValue =>
    keyValue[0] !== undefined && keyValue[1] !== undefined);

  keyAndValuesDefinite.forEach(keyValue => {
    const property = keyValue[0].trim();
    const value = keyValue[1].trim();

    cssProperties[property] = value;
  });

  return cssProperties;
}

module.exports = convertToObject;
