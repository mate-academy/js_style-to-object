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
  // write your code here
  const cssProperties = sourceString
    .split(';')
    .map((prop) => prop.trim())
    .filter((prop) => prop.length > 0)
    .map((prop) => {
      const [property, value] = prop.split(':').map((el) => el.trim());

      return [property, value];
    });

  return Object.fromEntries(cssProperties);
}

module.exports = convertToObject;
