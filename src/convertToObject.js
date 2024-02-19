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
  const trimmedString = sourceString
    .split(';')
    .filter(item => item.trim() !== '');

  const propertyValuePairs = trimmedString.map(item => {
    const [ property, value ] = item.split(':');

    return [property.trim(), value.trim()];
  });

  const convertedPairs = {};

  propertyValuePairs.map(item => {
    convertedPairs[item[0]] = item[1];
  });

  return convertedPairs;
}

module.exports = convertToObject;
