'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString
    .split(';')
    .reduce((prev, value, i, array) => {
      if (value.includes(':')) {
        const splited = (value.split(':'));

        const key = splited[0].trim();
        const val = splited[1].trim();

        prev[key] = val;
      }

      return prev;
    }, {});

  return result;
}

module.exports = convertToObject;
