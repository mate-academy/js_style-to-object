'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const stringWithoutSpaces = sourceString.replace(/\s*;\s*/g, ';');

  const pairs = stringWithoutSpaces.split(';');

  pairs.forEach(item => {
    let [property, value] = item.split(':');

    if (property !== undefined && value !== undefined) {
      property = property.trim();
      value = value.trim();

      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
