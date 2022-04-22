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
  // write your code here
  const object = {};
  const Arr = sourceString.split(';').map(property => property.split(':'));

  Arr.forEach(property => {
    if (property.length > 1) {
      object[property[0].trim()] = property[1].trim();
    }
  });

  return object;
}

module.exports = convertToObject;
