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
  const stylesObject = sourceString
    .split(';')
    .sort((a, b) => a[0].localeCompare(b[0]))
    .reduce((acc, currentValue) => {
      const [key, value] = currentValue.split(':');

      if (value === undefined) {
        return acc;
      }

      acc[key.trim()] = value.trim();

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
