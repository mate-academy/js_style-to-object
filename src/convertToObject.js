'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const converting = sourceString
    .split(';')
    .filter((law) => law.trim().length !== 0)
    .map((law) => {
      let [property, value] = law.split(': ');

      property = property.trim();
      value = value.trim();

      return [property, value];
    });

  return Object.fromEntries(converting);
}

module.exports = convertToObject;
