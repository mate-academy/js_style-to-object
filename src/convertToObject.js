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
  const properties = sourceString
    .split(';')
    .map(property => property.split(':'))
    .filter(property => (property.length > 1));

  const stylesObject = [...properties].reduce((obj, currentProperty) => {
    const key = currentProperty[0].trim();
    const value = currentProperty[1].trim();

    return {
      ...obj,
      [key]: value,
    };
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
