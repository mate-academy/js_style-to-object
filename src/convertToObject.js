'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const callback = (prev, property) => {
    return {
      ...prev,
      [property[0].trim()]: property[1].trim(),
    };
  };
  const arrayOfProperties = sourceString.split(';')
    .map(prop => prop.trim())
    .filter(prop => prop.length !== 0)
    .map(prop => prop.split(':'));

  return arrayOfProperties.reduce(callback, {});
}

module.exports = convertToObject;
