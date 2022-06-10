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
    .split('\n')
    .filter((rule) => rule.trim() !== '' && rule.trim() !== ';')
    .map((rule) => {
      let [property, value] = rule.trim().split(': ');

      property = property.trim();
      value = value.slice(0, -1).trim();

      return [property, value];
    });

  return Object.fromEntries(rules);
}

module.exports = convertToObject;
