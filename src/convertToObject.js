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
  const properties = sourceString.split(';');

  const result = properties.reduce((prev, property) => {
    if (property.trim()) {
      const key = property.split(':')[0].trim();
      const value = property.split(':')[1].trim();

      return {
        ...prev, [key]: value,
      };
    }

    return prev;
  }, {});

  return result;
}

module.exports = convertToObject;
