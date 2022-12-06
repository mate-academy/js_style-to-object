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
    .map(element => element.trim())
    .filter(element => element !== '')
    .map(element => element.split(':')
      .map(property => property.trim()));

  const callback = (prev, property) => ({
    ...prev,
    [property[0]]: property[1],
  });

  return sourceArray.reduce(callback, {});
}

module.exports = convertToObject;
