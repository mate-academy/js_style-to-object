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
  const properties
    = sourceString
      .replace(/\s\s+/g, ' ')
      .split(';')
      .reduce((arr, propertyString) => {
        const property
          = propertyString
            .trim()
            .replace(/(\s+:\s)|(:\s)/, ':')
            .split(':');

        if (property.length === 2) {
          const [key, val] = property;

          arr[key] = val;
        }

        return arr;
      }, {});

  return properties;
}

module.exports = convertToObject;
