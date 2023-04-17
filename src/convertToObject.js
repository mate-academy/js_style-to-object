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
  const newSourseString = sourceString.trim().split(';');

  newSourseString
    .filter(elem => elem.trim())
    .forEach(elem => {
      const [property, value] = elem.split(':');

      result[property.trim()] = value.trim();
    });

  return result;
}

module.exports = convertToObject;
