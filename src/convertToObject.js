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
  const object = {};

  sourceString
    .split(';')
    .map(el => {
      const elArr = el.split(':');
      const key = '' + elArr[0];
      const value = '' + elArr[1];
      const filterKey = key.trim();
      const filterValue = value.trim();

      if (filterKey !== '') {
        object[filterKey] = filterValue;
      }
    });

  return object;
}

module.exports = convertToObject;
