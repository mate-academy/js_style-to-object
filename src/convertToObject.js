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
  return sourceString
    .split(';')
    .reduce((prev, element) => {
      const [key, value] = element.split(':');

      if (key && value) {
        const normalizedKey = key.trim();
        const normalizedValue = value.trim();

        return {
          ...prev, [normalizedKey]: normalizedValue,
        };
      }

      return prev;
    }, {});
}

module.exports = convertToObject;
