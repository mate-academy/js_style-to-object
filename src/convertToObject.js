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
  const result = {};
  const array = sourceString.split(';').map(styles => styles.trim());

  for (const style of array) {
    if (style) {
      const [property, values] = style.split(':').map(value => value.trim());

      result[property] = values;
    }
  }

  // console.log(array);
  return result;
}

module.exports = convertToObject;
