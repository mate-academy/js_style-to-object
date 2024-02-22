'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see
 *  an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styledObject = {};
  const sourceStringArray = sourceString
    .split(';')
    .map((item) => item.split(':'));

  for (const item of sourceStringArray) {
    const [key, value] = item;

    if (value) {
      styledObject[key.trim()] = value.trim();
    }
  }

  return styledObject;
}

module.exports = convertToObject;
