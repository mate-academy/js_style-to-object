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
  const splited = sourceString.split(';').map(item => item.trim().split(':'));
  const result = {};

  for (let i = 0; i < splited.length; i++) {
    if (splited[i][0] && splited[i][1]) {
      const key = splited[i][0].trim();
      const value = splited[i][1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
