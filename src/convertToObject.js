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
  // write your code here
  const result = {};
  // preparing array to data extraction
  let arrOfProp = sourceString.split(';');

  arrOfProp = arrOfProp.map(value => value.replace(/\n*/g, ''));

  arrOfProp.forEach(element => {
    let key = '';
    let val = '';

    if (element.includes(':')) {
      [key, val] = element.split(':');
      result[key.trim()] = val.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
