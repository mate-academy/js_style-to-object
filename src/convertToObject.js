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
  const stylesObject = sourceString
    .split(';')
    .reduce((object, element) => {
      const arr = element.split(':');

      if (arr.length === 2) {
        const key = arr[0].trim();
        const value = arr[1].trim();

        object[key] = value;
      }

      return object;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
