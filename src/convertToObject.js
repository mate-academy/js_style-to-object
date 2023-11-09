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
  // write your code here
  const newObject = {};

  let array = sourceString.split(';');

  if (array.length === 0) {
    return {};
  }

  array = array.map((key) => {
    return key.replace(/\n/g, '').trim();
  }).filter(Boolean)
    .map((key) => {
      return key.split(':').map((el) => el.trim());
    }).forEach(element => {
      newObject[element[0]] = element[1];
    });

  return newObject;
}

module.exports = convertToObject;
