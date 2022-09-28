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
  const properties = sourceString.split(';').reduce((accumulator, property) => {
    const [key, value] = property.split(':');

    if (!key.trim()) {
      return {
        ...accumulator,
      };
    }

    return {
      ...accumulator,
      [key.trim()]: value.trim(),
    };
  }, {});

  return properties;
}

module.exports = convertToObject;
