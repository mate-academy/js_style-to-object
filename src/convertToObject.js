'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const getData = sourceString.trim().split(';');

  getData.forEach((item) => {
    if (item !== '') {
      const [key, value] = (item.trim().split(':'));

      if (key && value) {
        result[key.trim()] = value.trim();
      }
    }
  });

  return result;
}

module.exports = convertToObject;
