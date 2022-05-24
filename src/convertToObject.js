'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arrString = sourceString.split(';');
  const separString = arrString.map(str => str.split(':'));
  const convertObject = {};

  for (const prop of separString) {
    if (prop.length > 1) {
      convertObject[prop[0].trim()] = prop[1].trim();
    }
  }

  return convertObject;
}

module.exports = convertToObject;
