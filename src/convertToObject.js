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

  let arr = sourceString.split(';');

  arr = arr.map(el => el.split(':'));
  arr = arr.filter(el => el.length > 1);

  arr.map(el => {
    el[0] = el[0].trim();
    el[1] = el[1].trim();
  });

  arr.map(el => {
    obj[el[0]] = el[1];
  });

  return obj;
}

module.exports = convertToObject;
