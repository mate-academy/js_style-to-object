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

  const mas1 = sourceString.split(';');
  const mas2 = mas1.map(el => el.split(':'));

  mas2.forEach(el => {
    if (el.length === 2) {
      obj[el[0].trim()] = el[1].trim();
    }
  });

  return obj;
  // write your code here
}

module.exports = convertToObject;
