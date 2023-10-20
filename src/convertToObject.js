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
    .split('\n')
    .map(rule => rule.replace(';', '').trim())
    .reduce((prev, rule) => {
      if (!rule) {
        return {
          ...prev,
        };
      }

      const [property, value] = rule.split(':');

      return {
        ...prev,
        [property.trim()]: value.trim(),
      };
    }, {});
}

module.exports = convertToObject;
