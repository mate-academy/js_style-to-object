'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 // eslint-disable-next-line max-len
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const normalizedString = sourceString
    .replace(',', '')
    .replace('  ', '');

  const complexProperties = normalizedString
    .split(';')
    .map(element => {
      const returnedElement = element.split(':');

      return returnedElement;
    }).filter(element => element.length > 1);

  const computedProperies = complexProperties.reduce((prev, [key, value]) => {
    return {
      ...prev,
      [key.trim()]: value.trim(),
    };
  }, {});

  return computedProperies;
}

module.exports = convertToObject;
