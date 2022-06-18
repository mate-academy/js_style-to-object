'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  const object = {};
  const processing = (element) => element.split(':').map(el => el.trim());

  sourceString
    .split(';')
    .map(element => processing(element))
    .filter(element => element.length > 1)
    .forEach(element => {
      object[element[0]] = element[1];
    });

  return object;
}

module.exports = convertToObject;
