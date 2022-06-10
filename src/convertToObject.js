'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString
    .split(';')
    .map(prop => prop.split(':'));

  const propertiesWithValues = properties
    .filter(prop => prop.length > 1);

  const clearProperties = propertiesWithValues
    .map(prop => ([prop[0].trim(), prop[1].trim()]));

  const callback = (prev, property) => {
    return {
      ...prev,
      [property[0]]: property[1],
    };
  };

  return clearProperties.reduce(callback, {});
}

module.exports = convertToObject;
