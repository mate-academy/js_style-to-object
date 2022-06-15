'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString
    .split(';')
    .filter((rule) => rule.trim().length !== 0)
    .map((rule) => {
      let [property, value] = rule.split(': ');

      property = property.trim();
      value = value.trim();

      return [property, value];
    });

  return Object.fromEntries(rules);
}

module.exports = convertToObject;
