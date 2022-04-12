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
  const obj = {};

  const arrStyles = sourceString.split(';')
    .map(el => el.split(':'));

  arrStyles.forEach(el => {
    if (el.length > 1) {
      const key = el[0].trim();
      const value = el[1].trim();

      obj[key] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
