'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with
 *  styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const properties = sourceString
    .split(';')
    .map(property => property.split(':'))
    .filter(property => property.length > 1);

  const addProperties = (objects, property) => {
    return {
      ...objects,
      [property[0].trim()]: property[1].trim(),
    };
  };

  const cssProperties = properties.reduce(addProperties, {});

  return cssProperties;
}

module.exports = convertToObject;
