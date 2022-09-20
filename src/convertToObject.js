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
  const obj = {};

  const sourseArr = sourceString.split(';');

  const entries = sourseArr.map((el) => el.split(':'));

  entries.forEach((entry) => {
    const key = entry[0];
    const value = entry[1];

    if (value) {
      obj[key.trim()] = value.trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
