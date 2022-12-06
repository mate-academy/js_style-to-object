'use strict';

/**
 * Implement convertToObject function:
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 *[test file](./convertToObject.test.js))
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((prev, property) => {
      const splitProperty = property.split(':');
      const propertyName = splitProperty[0];
      const propertyValue = splitProperty[1];

      if (propertyName.length > 0 && propertyValue) {
        prev[propertyName.trim()] = propertyValue.trim();
      }

      return prev;
    }, {});
}

module.exports = convertToObject;
