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
  const sourceArray = sourceString
    .split(';')
    .filter(item => item.trim() !== '');

  const updatedSourceArray = sourceArray.map(item => {
    const [ property, value ] = item.split(':');

    return [property.trim(), value.trim()];
  });

  const sourceObject = {};

  updatedSourceArray.map(item => {
    sourceObject[item[0]] = item[1];
  });

  return sourceObject;
}

module.exports = convertToObject;
