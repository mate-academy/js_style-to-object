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
  const arrOfProp = sourceString.split(';');

  const properties = arrOfProp.map(value => value.replace(/\n*/g, ''));

  return properties.reduce(function(accumulator, currentValue) {
    let key = '';
    let val = '';

    if (currentValue.includes(':')) {
      [key, val] = currentValue.split(':');
      accumulator[key.trim()] = val.trim();
    }

    return accumulator;
  }, {});
}

module.exports = convertToObject;
