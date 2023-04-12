'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';').reduce((acc, property) => {
    const [key, value] = property.split(':').map(prop => prop.trim());

    return key && value
      ? {
        ...acc,
        [key]: value,
      }
      : acc;
  }, {});

  return declarations;
}

module.exports = convertToObject;
