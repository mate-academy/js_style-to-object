'use strict';

/**
 * Implement convertToObject function:
 *
//  * Function takes a string with styles
(see an example in [stylesString.js](./stylesString.js))
//  * and returns an object where CSS properties are keys
//  * and values are the values of related CSS properties
(see an exampl in [test file](./convertToObject.test.js))
//  *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const newList = {};

  const Divided = sourceString.split(';').filter(
    s => s.trim().length > 0).join(':').split(':').map(s => s.trim());

  for (let i = 1; i < Divided.length; i += 2) {
    newList[Divided[i - 1]] = Divided[i];
  }

  return newList;
}

module.exports = convertToObject;
